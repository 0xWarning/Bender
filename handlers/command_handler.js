const fs = require('fs');
const xAPI = "[".white +"Reg".rainbow + "]".white + " ";
const errorStr = "[".white +"Error".red + "]".white + " ";
const loadedStr = "[".white +"Loaded".green + "]".white + " ";
module.exports = (client, Discord) =>{
    fs.readdirSync("./commands/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                //table.addRow(file, ' | ✅');
                console.log(loadedStr + file);
            } else {
                //table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                console.log(errorStr + file + ' missing a help.name, or help.name is not a string.');
                continue;
            }
    
            // If there's an aliases key, read the aliases.
           // if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
}
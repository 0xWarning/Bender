const Config = require('../../config.json');


module.exports = (Discord, client, message, callback) => {
    const prefix = Config.prefix;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    const command = client.commands.get(cmd) || 
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    
    try{
        if (command) 
        {
        command.execute(message,args, cmd, client, Discord);
        console.log(`[Client] ${message.member.displayName} [Command] ${message.content.replace(args, '').replace(Config.prefix, '')}`);
        }
    } catch (err){
        message.reply(Config.EXEC_ERROR_MSG);
        console.log(err);
    }

}
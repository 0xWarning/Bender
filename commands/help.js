const Config = require('../config.json');

module.exports = {
    name: 'help',
    description: "help command",
    execute(message,args, cmd, client, Discord){

        const prefix = Config.prefix;

        message.channel.send(prefix +'kick - Kicks a member'+"\n"
        +prefix + "ban - Bans a member"+"\n"
        +prefix +"github - Source code of the bot"+"\n"
        +prefix +"ping - Shows bots latency"+"\n"
        +prefix +"ticket - create a ticket to get support"+"\n"
        +prefix +"suggestion - make a suggestion"+"\n"
        +prefix +"who - who is bender"+"\n"
        +prefix +"sl - simulate join"+"\n"
        +prefix +"sj - simulate leave"+"\n"
        +prefix +"uptime - shows how long the bot has been up for"+"\n"
        );
    }
}
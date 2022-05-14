module.exports = {
   name:'unlock',
   description:'unlock a channel',
   category: "admin",
   requiredPermissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
   execute(message,args, cmd, client, Discord){
    let lockPermErr = new Discord.MessageEmbed()
    .setTitle("**User Permission Error!**")
    .setDescription("**Sorry, you don't have permissions to use this! ❌**")
    
    if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(lockPermErr);

    let channel = message.channel;

    try {
        message.guild.roles.cache.forEach(role => {
            channel.createOverwrite(role, {
                SEND_MESSAGES: true,
                ADD_REACTIONS: true
            });
        });
    } catch (e) {
        console.log(e);
    }

    message.channel.send(`Done | Channel Unlocked!`);
   }

}
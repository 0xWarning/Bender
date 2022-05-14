module.exports = {
   name:'kick',
   description:'kick a member',
   requiredPermissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
   execute(message,args, cmd, client, Discord){
       const target = message.mentions.users.first();
       if(target){
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();
       }else{
           message.channel.send('Meh') ;
       }
   }

}
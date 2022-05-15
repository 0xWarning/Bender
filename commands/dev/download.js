const { MessageEmbed } = require("discord.js");
module.exports = {
   name:'download',
   description:'kick a member',
   category: "admin",
  async execute(message,args, cmd, client, Discord){
    if (message.member.roles.cache.some(role => role.name === '0xAPI')) {

        const msg = await message.channel.send(`Joining....`);
        const embed = new MessageEmbed()
    
        info = `rr`;
            embed.setFooter(`BenderAPI powerd by 0xAPI`);
    
            message.channel.send(embed.setColor("GREEN").setDescription(info));

      msg.edit('Request Complete! **Downloading Results**');
      msg.edit({components: [row]})
    }
    else{
        const msg = await message.channel.send(`Joining....`);
            const embed = new MessageEmbed()
        
            info = `ss`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
                message.channel.send(embed.setColor("GREEN").setDescription(info));
    
          msg.edit('Request Complete! **Downloading Results**');
    }
   }

}
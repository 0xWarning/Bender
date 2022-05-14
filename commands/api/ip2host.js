const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "ip2host",
    category: "api",
    description: "Resolves the IP's Host",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Request Sent....`);
        snekfetch.get(`http://localhost/ip2host?key=UUQl6GVF3wQTAvdv3wo5voryL6cRFDYgcp7V1IFqYyduU&output=html&host=${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `${r.body}`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("GREEN").setDescription(info));
        
          });
          msg.edit('Request Complete! **Downloading Results**');
    }
}

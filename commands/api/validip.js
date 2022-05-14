const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "validip",
    category: "api",
    description: "Checks if the ip is valid",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Request Sent....`);
        snekfetch.get(`http://localhost/validip?key=UUQl6GVF3wQTAvdv3wo5voryL6cRFDYgcp7V1IFqYyduU&output=html&ip=${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `${r.body}`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("BLUE").setDescription(info));
        
          });
          msg.edit('Request Complete! **Downloading Results**');
    }
}

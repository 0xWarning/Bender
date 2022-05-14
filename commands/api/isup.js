const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "isup",
    category: "api",
    description: "Checks if the website is up",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Request Sent....`);
        snekfetch.get(`http://localhost/isup?key=UUQl6GVF3wQTAvdv3wo5voryL6cRFDYgcp7V1IFqYyduU&output=html&host=${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `${r.body}`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("GREEN").setDescription(info));
        
          });
          msg.edit('Request Complete! **Downloading Results**');
    }
}

const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "detectcf",
    category: "api",
    description: "Detect if website has cloudflare or not",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Sending Request....`);
        snekfetch.get(`http://localhost/detectcf?key=UUQl6GVF3wQTAvdv3wo5voryL6cRFDYgcp7V1IFqYyduU&output=html&host=${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `${r.body}`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("RED").setDescription(info));
        
          });

          msg.edit('Request Complete! **Downloading Results**');
    }
}

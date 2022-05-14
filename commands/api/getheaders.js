const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "getheaders",
    category: "api",
    description: "Returns the headers of a website",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Grabbing results....`);
        snekfetch.get(`http://localhost/getheaders?key=UUQl6GVF3wQTAvdv3wo5voryL6cRFDYgcp7V1IFqYyduU&output=html&host=${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `${r.body}`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("RED").setDescription(info));
        
          });
    }
}

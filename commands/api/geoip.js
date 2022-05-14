const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "geoip",
    category: "api",
    description: "Geolocation",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Sending Request....`);
        snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `**IP**: ${args}\n**Country**: ${r.body.country}\n**City**: ${r.body.city}\n**Isp**: ${r.body.isp}`;
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("YELLOW").setDescription(info));
        
          });
          msg.edit('Request Complete! **Downloading Results**');
    }
}

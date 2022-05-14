const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "portscan",
    category: "api",
    description: "Check for common ports",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Request Sent....`);
        snekfetch.get(`http://localhost/portscan?key=UUQl6GVF3wQTAvdv3wo5voryL6cRFDYgcp7V1IFqYyduU&output=json&host=${args}`).then(r => {

            const embed = new MessageEmbed()
        
            info = `${r.body}`.replaceAll(`open`, "**open**").replaceAll(`closed`, "**closed**").replaceAll("</font>", "**").replaceAll(`<br>`, "");
                embed.setFooter(`BenderAPI powerd by 0xAPI`);
        
            return msg.edit(embed.setColor("GREEN").setDescription(info));
        
          });
          msg.edit('Request Complete! **Downloading Results**');
    }
}

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "github",
    aliases: ["git", "github", "gb"],
    category: "info",
    description: "Github ?",
    usage: "[command | alias]",
    execute: async (message,args, cmd, client, Discord) => {
        //do func
        const embed = new MessageEmbed()
        .setAuthor("Bender", "https://i.pinimg.com/736x/d4/fc/38/d4fc386b6dd407f8954f73cd742f7a97--d-design-futurama.jpg", "https://github.com/0xWarning/Bender")
        .setThumbnail("https://cdn.discordapp.com/attachments/930906438820311060/975002017510596658/toppng.com-stickers-beer-bottle-812x1426.png")
        .addField("Github Repo", "https://github.com/0xWarning/Bender", true)
        .addField("Developer", "https://github.com/0xWarning/", true)
        .setFooter("~Bender")

    message.channel.send(embed);
    }
}
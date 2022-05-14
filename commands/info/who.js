const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "who",
    aliases: ["w", "who", "info"],
    category: "info",
    description: "Who Am I ?",
    usage: "[command | alias]",
    execute(message,args, cmd, client, Discord){
        //do func
        const embed = new MessageEmbed()
       .addField("Who Am I", "My Names Bender", false)
        .addField("What Do I Do", "Drink Beer", false)
        .addField("About Me", "Bite My Shiny Metal Ass", false)
        .addField("Who Made Me", "0xWarning", false)
        .setAuthor("Bender", "https://i.pinimg.com/736x/d4/fc/38/d4fc386b6dd407f8954f73cd742f7a97--d-design-futurama.jpg", "https://github.com/0xWarning/Bender")
        .setThumbnail("https://duce5lj2f2sxj.cloudfront.net/icon/premium/png-64/520439.png?Expires=1618099200&Signature=P07e3fPLg8Wufs7Do6WasssByBIBnX~W~Diazc~87G2Wq4qRbUGABr9vKMnap608qrIF5pmkaaCsCFxpk9-pX20AWdlvO59WV6GeabBDCJAwHWwncFBUkciFMDiNx~4M1MmOPFgNWUkYbbbPADUljV516IP0TPhIHzhkhQzrPGrKlSSNZEJHcltfTBWWJUoKHpQNuTqV~JcMR-cSGEXM6INuX5EdBeAvVRJ35fxqQbEn6ZUw9G-5zi6CgospBvgoCDvFr~Ot7ssvtJ5YpVnyFCRyzLaGvTnGjCXzNTKY0CBwSTaOmrerlAPOjFjzmwnPVt8I97m7RoGlu~qXy71ZlQ__&Key-Pair-Id=APKAIONEDRCDZGBCR6PA")
        
        .setFooter("Bender .. Teh")

    message.channel.send(embed);
    }
}

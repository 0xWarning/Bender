module.exports = {
    name: 'clear',
    description: 'Clear messages!',
    category: "tools",
    async execute(message,args, cmd, client, Discord){
        if (message.deletable) {
            message.delete();
        }

        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You Do Not Have Permission !").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Please Enter a Number").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Error With My Permissions!").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Deleted \`${deleted.size}\` Messages.`))
            .catch(err => message.reply(`Error Has Occurred  ${err}`));
    }
}
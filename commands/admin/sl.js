module.exports = {
    name: "sl",
    aliases: ['simulateleave', 'simulate-leave', 'simleave'],
    category: "admin",
    description: "Simulate yourself leaving the server.",
    requiredPermissions: ["ADMINISTRATOR"],
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Leaving....`);
        client.emit('guildMemberRemove', message.member);
        msg.edit(`Left`);
    }
}

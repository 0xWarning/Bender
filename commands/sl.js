module.exports = {
    name: "sl",
    category: "info",
    description: "Returns latency and API ping",
    requiredPermissions: ["ADMINISTRATOR"],
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Leaving....`);
        client.emit('guildMemberRemove', message.member);
        msg.edit(`Left`);
    }
}

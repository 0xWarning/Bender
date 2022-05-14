module.exports = {
    name: "sj",
    category: "info",
    description: "Returns latency and API ping",
    requiredPermissions: ["ADMINISTRATOR"],
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Joining....`);
        client.emit('guildMemberAdd', message.member);
        msg.edit(`Joined`);
    }
}

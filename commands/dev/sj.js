module.exports = {
    name: "sj",
    aliases: ['simulatejoin', 'simulate-join', 'simjoin'],
    category: "dev",
    description: "Simulate yourself joining the server again.",
    requiredPermissions: ["ADMINISTRATOR"],
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Joining....`);
        client.emit('guildMemberAdd', message.member);
        msg.edit(`Joined`);
    }
}

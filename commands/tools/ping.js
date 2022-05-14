module.exports = {
    name: "ping",
    category: "info",
    category: "tools",
    description: "Returns latency and API ping",
    execute: async (message,args, cmd, client, Discord) => {
        const msg = await message.channel.send(`Pinging....`);

        msg.edit(`Pong! | Latency : ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms | API Latency : ${Math.round(client.ping)}ms`);
    }
}

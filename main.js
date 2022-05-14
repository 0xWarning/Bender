const Config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const Token = Config.token;

const { fileURLToPath } = require('url');

client.events = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync("./commands/");

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});


client.login(Token);

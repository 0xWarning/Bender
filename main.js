const Config = require('./config.json');
const Discord = require('discord.js');

const client = new Discord.Client();
const Token = Config.token;

const fs = require('fs');
const { fileURLToPath } = require('url');

client.commands =new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});


client.login(Token);

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');
const { fileURLToPath } = require('url');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});


client.login('OTczNTgzMjY0MzMxNzMwOTU0.GSheRn.iRnoI5SkW-YH5WO6UYzWxh8vTtL1tVpLRw_vb8');

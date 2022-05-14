<p align="center">
  <img width="248" height="248" src="https://raw.githubusercontent.com/0xWarning/Bender/main/image/b1.png">
</p>
<p align="center">
# 🍺 Bender

 Just a regular discord bot. I PROMISE!
</p>
# ⚙️ Configuration

```json
{
    "prefix": "$",
    "token": "BotTknHere",
    "EXEC_ERROR_MSG": "There was an error trying to execute this command!",
    "START_MSG": "$"
  }
```

# ⚡ Getting Started

Install Node.js **[Link](https://nodejs.org/en/download/)**

Do These Steps in a Terminal Type Enviroment

```bash
# Goto Dir
$ cd Bender

# Install packages
$ npm i

# Boot it up
$ node main.js

```

# 📜 Commands

> Note: The default prefix is '$'
> | This can be changed in the config.json file

## API

- 🖥️ Detect if website is using cloudflare

`$detectcf example.com`

- 🖥️ Resolve the IP's Geolocation

`$geoip 8.8.8.8`

- 🖥️ Get the Headers of a website

`$getheaders example.com`

- 🖥️ Resolve the Host's IP

`$host2ip example.com`

- 🖥️ Resolve the IP's Host

`$ip2host 8.8.8.8`

- 🖥️ Check if a website is up

`$isup example.com`

- 🖥️ Scan the most common ports of a IP

`$portscan 8.8.8.8`

- 🖥️ See if the IP is actually valid

`$validip 8.8.8.8`

- 🖥️ Take a screenshot of a website without going there

`$webshot example.com`

## ADMIN

- 🛡️ Kick a unruley user

`$kick @user`

- 🛡️ Lock a Channel from others

`$lock #example-channel`

- 🛡️ UnLock a Channel from others

`$unlock #example-channel`


- 🛡️ Add a role to a user

`$roleadd @user @role`

- 🛡️ Remove a role from a user

`$roledel @user @role`

- 🛡️ Retrive information about a role

`$roleinfo @role`

- 🛡️ Retrive users that have said role

`$rolememberlist @role`

- 🛡️ Speak to the server as the bot

`$say Look im controling the bot ...`

- 🛡️ People speaking to fast ? Slowmode is now a command

`$slowmode timeinseconds`

- 🛡️ Check what that user is all about

`$whois @user`

## DEV

- ⚠️ Simulate someone joining

`$sj`

- ⚠️ Simulate someone leaving

`$sl`

## INFO

- ℹ️ Checkout our github

`$github`

- ℹ️ Checkout the help menu

`$help`

- ℹ️ Checkout a specific command in the help menu

`$help [cmd]`

- ℹ️ See how long the bits been running for

`$uptime`

- ℹ️ Who is the bot ? who knows ...

`$who`

## SUPPORT

- 🆘 Want to make a suggestion ?

`$suggestion this is a suggestion`

- 🆘 Want to speak to someone other than a bot for help ? Creat a ticket !

`$ticket`

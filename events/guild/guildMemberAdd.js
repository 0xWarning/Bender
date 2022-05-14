const colors = require('colors');

module.exports = (Discord, client, guildMember) => {
    console.log(`${guildMember.user.tag} joined`.green);
    guildMember.guild.channels.cache.get('930907918994378752').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
}
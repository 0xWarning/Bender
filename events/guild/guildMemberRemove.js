const colors = require('colors');

module.exports = (Discord, client, guildMember) => {
    console.log(`${guildMember.user.tag} left`.red);
    guildMember.guild.channels.cache.get('930907918994378752').send(`Bye <@${guildMember.user.id}> !`)
}
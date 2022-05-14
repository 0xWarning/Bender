const colors = require('colors');

module.exports = (Discord, client) =>{

    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    const cuiBot = "[".white +"Bot".cyan + "]".white + " ";
    const banHum = "[".white +"Human".zebra + "]".white + " ";
    const banBot = "[".white +"Bot".cyan + "]".white + " ";
    const banStaff = "[".white +"STAFF".yellow + "]".white + " ";

    console.log(``);
    console.log(`Logged in as ${client.user.tag}!`.yellow);
    console.log(`Bender Started At ${year + ":" + month + ":" + date}!`.rainbow);
    console.log(`----------------`.gray);
    console.log("     " + banStaff);
    console.log("     "+ banHum);
    console.log("      "+ banBot);
    console.log(`----------------`.gray);
    console.log(``);

    client.user.setActivity('me being developed', { type: 'WATCHING' });
}
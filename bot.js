var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Konfigurace logger nastavení
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});


bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
         }
     }
});
bot.on('ready',function() {
	console.log('Logged in as %s - %s\n',bot.username, bot.id);
});

//odpovědi na zprávy
bot.on('message', function(user, userID, channelID, message, event) {
if (message === "Michal je bůh") {
	bot.sendMessage({
		to: channelID,
		message: "Hovno bůh!"
	});
}
});

bot.on('message', function(user, userID, channelID, message, event) {
if (message === "facepalm") {
	bot.sendMessage({
		to: channelID,
		message: "https://media.giphy.com/media/NaKGiq4wAmi0E/giphy.gif"
	});
}
});

bot.on('message', function(user, userID, channelID, message, event) {
if (message === "Zdar") {
	bot.sendMessage({
		to: channelID,
		message: "Zahrajeme World of Warships?"
	});
}
});

bot.on('message', function(user, userID, channelID, message, event) {
if (message === "Ahoj") {
	bot.sendMessage({
		to: channelID,
		message: "Nechť tě skolí mor a cholera!"
	});
}
});

//Zkouška notifikace
bot.on('notification',function(user, userID, channelID, message, ) {
	if (notification === user.joinvoicechannel) {
		bot.sendMessage({
		to: 497145169817239592,
		message: ":arrow_right: User joined to voice channel " + channel
	});
	}
});

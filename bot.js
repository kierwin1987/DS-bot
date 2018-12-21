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

//zkouška notifikace
bot.on('notification',function(user, userID, channelID, message, ) {
	if (notification === user.joinvoicechannel) {
		bot.sendMessage({
		to: 497145169817239592,
		message: ":arrow_right: User joined to voice channel " + channel
	});
	}
});

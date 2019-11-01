const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
client.login('Token');

client.on('ready', () => {
	var generalChannel = client.channels.get("497145169817239592")
	generalChannel.send({files: ["https://media.giphy.com/media/xiqYaqo9e2f8uZxYTm/giphy.gif"]})
});

//Add emoji name
var emojiname = ["WOT","ARK"];

//Add role name
var rolename=["WoT","ARK"];

//game presence/activity
client.on('ready', () => {
	client.user.setActivity("poker");
});


//reaction role 
client.on('message', msg => {
	if(msg.content.startsWith("!reaction")){
	const embed = new Discord.RichEmbed();
	embed.setTitle('Role reaction');
	embed.setTimestamp();
	embed.setColor('#00FF00');
	embed.addField("Role k přidání:","Pro World of Tanks a pro ARK Survival Evolved.");
	embed.addField("Fungování:","Stačí jen kliknout na reakci k dané ikoně hry u zprávy výše. Tím si přídáte, či odebere roli.");
	msg.channel.send({embed});
	if(!msg.channel.guild) return;
	for(let n in emojiname){
		var emoji =[msg.guild.emojis.find(r => r.name == emojiname[n])];
		for(let i in emoji){
			msg.react(emoji[i]);
		}
	}
	}
});

client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
      let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);          
      reaction.message.guild.member(user).addRole(role).catch(console.error);
    }
  }
  });

client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
      let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);   
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
    }
    }
  });


//autorole
client.on("guildMemberAdd", function(member) {
	let role = member.guild.roles.find("name", "Member");
	member.addRole(role).catch(console.error);
});

//welcome message
client.on('guildMemberAdd', member => {
	member.guild.channels.get('494528283308851220').send('Greetings, sir '+ member.user+'.');
});

//leave message
client.on('guildMemberRemove', member => {
	member.guild.channels.get('497145169817239592').send(member.user+' odešel od nás.');
});

//odpovědi na zprávy
client.on('message', message => {
	if (message.content === '!pozvánka') {
		message.channel.send('https://discord.gg/jxYaSJj!');
	}
	if (message.content === '!ARK') {
		const embed = new Discord.RichEmbed();
		embed.setTitle('ARK info');
		embed.setTimestamp();
		embed.setColor('#00FF00');
		embed.setThumbnail('https://cdn2.unrealengine.com/Diesel/product/ark/ark_logo_2018-387x322-e5210b521deb62a7129c70840935bf7779feeb69.png');
		embed.setImage('http://www.fakaheda.eu/logo/wide_green_white_transparent.png');
		embed.addField("ARK Survival Evolved server","[Oficiální WIKI pro ARK](https://ark.gamepedia.com/ARK_Survival_Evolved_Wiki)");
		embed.addField("Server je hostován u Fakahedy.","[www.fakaheda.eu](https://www.fakaheda.eu/)");
		embed.addField("IP serveru:", "82.208.17.60:27901(Přes server na steamu 82.208.17.60:28901)");
		embed.addField("Jméno serveru:", "[CZ/SK] ARK Jurastic world - Private server");
		embed.addField("Expiruje:", "21. 11. 2019");
		embed.addField("Automatický restart serveru:","Každý den cca v 5:28");
		embed.addField("Mapa:", "[Ragnarok - ARK Expansion Map](https://store.steampowered.com/app/642250/Ragnarok__ARK_Expansion_Map/)");
		embed.addField("Módy:", "[Crafted Element](https://steamcommunity.com/sharedfiles/filedetails/?id=944235662),[Bore Water Kit](https://steamcommunity.com/sharedfiles/filedetails/?id=730794403),[Classic Flyers](https://steamcommunity.com/sharedfiles/filedetails/?id=895711211),[Super Tranq Rifle](https://steamcommunity.com/sharedfiles/filedetails/?id=686599588),[Structures Plus](https://steamcommunity.com/sharedfiles/filedetails/?id=731604991),[Automated Ark](https://steamcommunity.com/sharedfiles/filedetails/?id=812655342),[Upgrade Station v1.8i](https://steamcommunity.com/sharedfiles/filedetails/?id=821530042)");
		message.delete().catch(o=>{});
		message.channel.send({embed});
	};
	if (message.content === 'dafuq') {
		message.channel.send({files: ["https://thumbs.gfycat.com/AcidicFlickeringCobra-small.gif"]});
	}
	if (message.content === 'Najdi tank') {
		message.channel.send("https://media.giphy.com/media/hTh9bSbUPWMWk/200.webp");
	}
	if (message.content === 'why not') {
		message.channel.send({files: ["https://i.imgur.com/nY1SVr7.gif"]});
	}
	if (message.content === 'Spáchal jsi zločiny!') {
		message.channel.send('You have committed crimes against Skyrim and her people. What say you in your defense?', {files: ["./images/maxresdefault.jpg"]});
	}
	if (message.content === 'why not?') {
		message.channel.send({files: ["https://i.imgur.com/nY1SVr7.gif"]});
	}
	if (message.content === 'facepalm') {
		message.channel.send({files: ["https://media1.tenor.com/images/830800d4e0fc56b7fd6ccf465c9575fc/tenor.gif"]});
	}
	if (message.content === 'banhammer') {
		message.channel.send({files: ["https://i.imgur.com/WOjy315.gif"]});
	}
	if (message.content === 'Zapal si') {
		message.channel.send({files: ["https://media1.tenor.com/images/02090871c75cbef4e11b88f99f2ee782/tenor.gif"]});
	}
	if (message.content === 'a chytej!') {
		message.channel.send({files: ["https://i.makeagif.com/media/9-14-2015/1oH5R4.gif"]});
	}
	if (message.content === 'kill secured') {
		message.channel.send({files: ["https://media.giphy.com/media/ihVhvTGjasuha/giphy.gif"]});
	}
	if (message.content === 'LOL') {
		message.channel.send({files: ["https://thumbs.gfycat.com/DefinitiveAdeptAquaticleech-size_restricted.gif"]});
	}
	if (message.content === 'meepo team dance') {
		message.channel.send({files: ["https://thumbs.gfycat.com/AmazingGrizzledLaughingthrush-size_restricted.gif"]});
	}
	if (message.content === '!TS3') {
		let embed = new Discord.RichEmbed();
		embed.setTitle('Záložní TS3 server');
		embed.setTimestamp();
		embed.setColor('#0000FF');
		embed.setThumbnail('http://thespiritualsphere.com/wp-content/uploads/2010/09/ts3_logo.png');
		embed.addField("Záložní TS3 server v případě výpadku Discord služeb.", "Adresa: 37.205.12.96");
		embed.addField("Další informace","Na serveru je nastavené heslo.");
		message.delete().catch(o=>{});
		message.channel.send({embed})
	}
	if (message.content === '!ARKStatus') {
		const queryUrl = ["http://query.fakaheda.eu/82.208.17.60:27901.feed"];
		let onlineMsg = "";
		queryUrl.forEach(url => {
			fetch(url).then(response => {
				return response.json();
				}).then(data => {
					// Work with JSON data here
					// console.log(data);
		let embed = new Discord.RichEmbed();
		embed.setTitle(data.hostname + " Server status");
		embed.setTimestamp();
		embed.setColor('#FF0000');
		embed.addField("Server status", data.status);
		embed.addField("Mapa", data.map);
		embed.addField("Slots", data.slots, true);
		embed.addField("Online", data.players, true);
		if (data.players>0) {
			onlineMsg = "";
			data.players_list.forEach(element => {
				onlineMsg += ""+element.name+", ";
				});
		embed.addField("Online players", onlineMsg);
		}
		message.delete().catch(o=>{});
		message.channel.send({embed});
		}).catch(err => {
		message.delete().catch(o=>{});
		console.log(err);
		// Do something for an error here
		//onlineMsg = "Failed to query the server. You can try later. Sorry."
		let embed = new Discord.RichEmbed();
		embed.setTitle("Error").setTimestamp().setDescription("Failed to query the server. Try again later. Sorry.");
		embed.addField("Error", err);
		message.channel.send({embed});
		});
	});
	}
});

//getAvatar
client.on('message', message => {
	if (!message.guild) return;
	if (message.content.startsWith('!getAvatar')) {
		const user = message.mentions.users.first();
		if (user) {
		message.channel.send('Here is avatar of '+user.toString()+' : '+user.avatarURL );
		}
		else {
			message.channel.send('Here is your Avatar : '+message.author.avatarURL);
		}
	}
});

//ban
client.on('message', message => {
	if (!message.guild) return;
		if (message.content.startsWith('!ban')) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
			if (member) {
				member.ban({
					reason: 'Ban has been deserved!',
					}).then(() => {
						message.channel.send(user.toString()+' byl trvale vykázán z těchto prostor.');
						}).catch(err => {
							message.reply('Bohužel ' + user.toString()+' má silné zdroje stříbra a zlata, které si rozdělujeme rovným dílem. Proto ho tu nechám.');
							console.error(err);
							});
			} else {
				message.reply(user.toString()+' není v těchto prostorách');
				}
		} else {
		message.reply('neoznačil jsi zloducha k vypovězení!');
		}
	}
});

//kick
client.on('message', message => {
	if (!message.guild) return;
	if (message.content.startsWith('!kick')) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
			if (member) {
				member.kick('').then(() => {
					message.reply(user.toString()+' byl vykázán z těchto prostor.');
					}).catch(err => {
						message.reply('Bohužel ' + user.toString()+' má silné zdroje stříbra a zlata, které si rozdělujeme rovným dílem. Proto ho tu nechám.');
						console.error(err);
						});
				} else {
			message.reply(user.toString() + ' není v těchto prostorách');
		}
	} else {
		message.reply('neoznačil jsi zloducha k vypovězení!');
		}
	}
});

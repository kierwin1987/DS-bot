const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NDk2ODA2MDUyMTI2NTIzNDIy.Dv8Fow.IhDy4MEHGcwVaxxKOZ-ITrMNfdI');

client.on('ready', () => {
  console.log('I am ready!');
});

//game presence/activity
client.on('ready', () => {
    client.user.setActivity("si s Michalem")
});

//auto role
client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Member");
    member.addRole(role).catch(console.error);
});

//odpovědi na zprávy
client.on('message', message => {
	if (message.content === 'ping') {
    message.channel.send('pong');
	}
	if (message.content === '!pozvánka') {
    message.channel.send('https://discord.gg/jxYaSJj!');
	}
	if (message.content === 'fuck you') {
    message.channel.send('https://media.giphy.com/media/d2jfPv6CUzpopfLa/giphy.gif');
	}
	if (message.content === 'wtf?!?') {
    message.channel.send('https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif');
	}
	if (message.content === 'what the fuck?') {
    message.channel.send('https://media.giphy.com/media/oKQHP89vJTUnm/source.gif');
	}
	if (message.content === 'Michal je bůh') {
    message.channel.send('Hovno bůh! Je to krampus!\nhttps://cdn.japantimes.2xx.jp/wp-content/uploads/2017/12/f-krampus-a-20171209-870x586.jpg');
	}
	if (message.content === 'dafuq') {
    message.channel.send('https://thumbs.gfycat.com/AcidicFlickeringCobra-small.gif');
	}
	if (message.content === 'lol') {
    message.channel.send('https://media.giphy.com/media/O5NyCibf93upy/giphy.gif');
	}
	if (message.content === 'ježíš') {
    message.channel.send('https://ih0.redbubble.net/image.426448139.5540/ap,550x550,12x16,1,transparent,t.u5.png');
	}
	if (message.content === 'Jesus!') {
    message.channel.send('https://i.imgur.com/X7ETbDU.gif');
	}
	if (message.content === 'why not') {
    message.channel.send('https://media.giphy.com/media/3d2wgrPNcBqocFzFbJ/giphy.gif');
	}
	if (message.content === 'why not?') {
    message.channel.send('https://media.giphy.com/media/3d2wgrPNcBqocFzFbJ/giphy.gif');
	}
	if (message.content === 'meepo team dance') {
    message.channel.send('https://thumbs.gfycat.com/AmazingGrizzledLaughingthrush-size_restricted.gif');
	}
	if (message.content === 'nice') {
    message.channel.send('https://media.tenor.com/images/ffc13fce77b6382023968b8518cb0c49/tenor.gif');
	}
	if (message.content === 'facepalm') {
    message.channel.send('https://media1.tenor.com/images/830800d4e0fc56b7fd6ccf465c9575fc/tenor.gif');
	}
	if (message.content === 'banhammer') {
    message.channel.send('https://i.imgur.com/WOjy315.gif');
	}
	if (message.content === 'Zapal si') {
    message.channel.send('https://media1.tenor.com/images/02090871c75cbef4e11b88f99f2ee782/tenor.gif');
	}
	if (message.content === 'a chytej!') {
    message.channel.send('https://i.makeagif.com/media/9-14-2015/1oH5R4.gif');
	}
	if (message.content === 'No Vláďo!') {
    message.channel.send('https://66.media.tumblr.com/54d3fd2bf115f3454f4155a3a24cde8d/tumblr_o2pm17shNZ1v8amego1_400.gif');
	}
	if (message.content === 'Já čekám') {
    message.channel.send('https://media.giphy.com/media/SmpV6sKa1vBxm/giphy.gif');
	}
	if (message.content === 'oh, kurva') {
    message.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/060/693/c98.gif');
	}
	if (message.content === 'Honza je bůh') {
    message.channel.send('https://i.ytimg.com/vi/BshH5rZuMC4/maxresdefault.jpg');
	}
	if (message.content === 'Michale, kde je ta loď?') {
    message.channel.send('https://media.giphy.com/media/hTh9bSbUPWMWk/200.webp');
	}
	if (message.content === 'Vláďa je bůh') {
    message.channel.send('Smrt si přichází pro tebe, Vláďíku!\nhttps://i.pinimg.com/originals/4f/ec/6b/4fec6b58f25306230f45365f85296665.gif');
	}
	if (message.content === 'Slunění se na sluníčku') {
    message.channel.send('https://i.pinimg.com/originals/6d/2c/90/6d2c908504367c225273645ecbdfb998.gif');
	}
	if (message.content === 'rum?') {
    message.channel.send('https://media.tenor.com/images/1583c520a04015926338d5fa1b2666a6/tenor.gif');
	}	
	if (message.content === 'Rum?') {
    message.channel.send('https://media.tenor.com/images/1583c520a04015926338d5fa1b2666a6/tenor.gif');
	}
	if (message.content === 'room?') {
    message.channel.send('https://i.gifer.com/IabK.gif');
	}
	if (message.content === 'roomka?') {
    message.channel.send('https://i.gifer.com/IabK.gif');
	}
	if (message.content === 'Honzo, kde je ta loď?') {
    message.channel.send('Moment, zaměřuji!\nhttps://thumbs.gfycat.com/EsteemedPettyCockatoo-small.gif');
	}
	if (message.content === 'Vláďo, vidíš tu loď?') {
    message.channel.send('https://thumbs.gfycat.com/PlainImperturbableHarborseal-small.gif\nMám malý dalekohled :cry:');
	}
	if (message.content === 'kill secured') {
    message.channel.send('https://media.giphy.com/media/ihVhvTGjasuha/giphy.gif');
	}
	if (message.content === 'LOL') {
	message.channel.send('https://thumbs.gfycat.com/DefinitiveAdeptAquaticleech-size_restricted.gif');
	}
	if (message.content === 'lmao') {
	message.channel.send('https://thumbs.gfycat.com/CourageousCreativeBullmastiff-size_restricted.gif');
	}
	if (message.content === 'You have been banhammered') {
	message.channel.send('https://media1.tenor.com/images/11baffb759ae7ca9d984153cf53a7768/tenor.gif');
	}
	if (message.content === 'Cheers') {
    message.channel.send('https://i.gifer.com/LAeE.gif');
	}
	if (message.content === 'Honzo, vidíš tu loď?') {
    message.channel.send('Zaostřím a uvidím nádherně\nhttps://i.imgur.com/yyTWgyL.gif');
	}
	if (message.content === 'Ahoj') {
    message.channel.send('https://media.giphy.com/media/FmBhzktIjvdZe/200.gif');
	}
	if (message.content === 'I don\'t give a fuck') {
	message.channel.send('http://i45.tinypic.com/cnx2x.gif');
	}
	if (message.content === 'blowjob?') {
		message.channel.send('https://i.imgur.com/VEbmoWU.gif?');
	}
	if (message.content === 'let\'s get sexy!') {
		message.channel.send('https://media.tenor.com/images/7c27472f3eb2c0e50c6aace9c7c40164/tenor.gif');
	}
	if (message.content === 'brečík') {
		message.channel.send('https://media.giphy.com/media/xUPGchm5uhJFcZacta/giphy.gif');
	}
	if (message.content === 'Give me a hug.') {
		message.channel.send('https://media.giphy.com/media/4rGpCAtyTfwHu/giphy.gif');
	}
	if (message.content === '!ETS2') {
		message.channel.send({ embed: {
  "title": "Hnilička Transport",
  "description": "Virtuální přepravní společnost zabívající se přepravou Plachtové a ADR, podvalů a nadměrů",
  "url": "http://hnilitrans.cesmadcs.eu/",
  "color": 2829025,
  "thumbnail": {
    "url": "http://cesmadcs.eu/img/p/6/4/7/647-thickbox_default.jpg"
  },
  "author": {
    "name": "kierwin1987",
    "icon_url": "https://cdn.discordapp.com/avatars/260405223409844224/e81e524dcef3f17746ce27c6d3ece98d.png?size=2048"
  },
  "fields": [
    {
      "name": "Vedení firmy:",
      "value": "Kierwin1987 - Majitel firmy a dispečer ADR, podvalů a nadměrných přepravy"
    },
    {
      "name": "Dispečink:",
      "value": "Miry2003 - Dispečer plachtové přepravy"
    },
    {
      "name": "Pravidla:",
      "value": "Dodržování 561/2006, [pravidla TMP](https://truckersmp.com/rules) a pravidla silničního provozu."
    }
  ]
} });
	}
	if (message.content === '!ARK') {
		message.channel.send({embed: {
    "color": 5159171,
    "thumbnail": {
      "url": "https://cdn2.unrealengine.com/Diesel/product/ark/ark_logo_2018-387x322-e5210b521deb62a7129c70840935bf7779feeb69.png"
    },
    "image": {
      "url": "http://www.fakaheda.eu/logo/wide_green_white_transparent.png"
    },
    "author": {
      "name": "Kierwin1987",
      "icon_url": "https://cdn.discordapp.com/avatars/260405223409844224/e81e524dcef3f17746ce27c6d3ece98d.png?size=2048"
    },
    "fields": [
      {
        "name": "ARK Survival Evolved server",
        "value": "[Oficiální WIKI pro ARK](https://ark.gamepedia.com/ARK_Survival_Evolved_Wiki)"
      },
      {
        "name": "IP serveru:",
        "value": "82.208.17.60:27901(Přes server na steamu 82.208.17.60:28901)"
      },
	  {
		 "name": "Jméno serveru",
		 "value": "[CZ/SK] ARK Jurastic world"
	  },
      {
        "name": "Mapa:",
        "value": "[Ragnarok - ARK Expansion Map](https://store.steampowered.com/app/642250/Ragnarok__ARK_Expansion_Map/)"
      },
      {
       "name": "Módy:",
       "value": "[Automated Ark 2.51](https://steamcommunity.com/sharedfiles/filedetails/?id=812655342),[Bore Water Kit](https://steamcommunity.com/sharedfiles/filedetails/?id=730794403),[Classic Flyers](https://steamcommunity.com/sharedfiles/filedetails/?id=895711211),[Upgrade Station v1.8i](https://steamcommunity.com/sharedfiles/filedetails/?id=821530042),[Super Tranq Rifle](https://steamcommunity.com/sharedfiles/filedetails/?id=686599588),[Structures Plus](https://steamcommunity.com/sharedfiles/filedetails/?id=731604991),[Capitalism Currency](https://steamcommunity.com/sharedfiles/filedetails/?id=747539326),[Capitalism NPC Trader](https://steamcommunity.com/sharedfiles/filedetails/?id=873746971),[Capitalism Player Trader](https://steamcommunity.com/sharedfiles/filedetails/?id=873749349)"
      }
    ]
}	});
	}
	if (message.content === 'Chytnu tě!') {
		message.reply('beep, beep!\nhttps://i.pinimg.com/originals/f2/97/68/f29768a83d196e199673b89c22ec4fb5.gif');
	}
	});

//ban
client.on('message', message => {
    if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
	  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Insufficient Permission');
      if (member) {
        member.ban({
          reason: 'Ban has been deserved!',
        }).then(() => {
          message.channel.send(user.toString()+'banhammer has spoken\nhttps://i.imgur.com/Nziie7u.gif');
            }).catch(err => {
                message.reply('nebyl jsem schopen použítí banovacího nástroje k ' + user.toString()+', protože nemám tak velké kladivo, jako má '+user.toString()+'.');
          console.error(err);
        });
      } else {
        message.reply(user.toString()+'není na tomto serveru');
      }
    } else {
      message.reply('neoznačil jsi uživatele k použítí banovacího nástroje');
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
	  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('Insufficient Permission');
      if (member) {
        member.kick('').then(() => {
          message.reply(user.toString()+' byl úspěšně vykopnut.\nNebo byl nakopnut? https://media.giphy.com/media/ylp4hl9xEaWyc/200.gif');
        }).catch(err => {
            message.reply('nebyl jsem schopen nakopnout ' + user.toString());
          console.error(err);
        });
      } else {
          message.reply(user.toString() + ' není na tomto serveru');
      }
    } else {
      message.reply('neoznačil jsi uživatele k nakopnutí');
    }
  }
});


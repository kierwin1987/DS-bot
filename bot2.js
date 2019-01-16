const Discord = require('discord.js');
const client = new Discord.Client();
const CLEAR_MESSAGES = '!clearMessages';
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
    let role = member.guild.roles.find("name", "User");
    member.addRole(role).catch(console.error);
});

//role



//odpovědi na zprávy
client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.on('message', message => {
  if (message.content === '!pozvánka') {
    message.channel.send('https://discord.gg/jxYaSJj!');
  }
});

client.on('message', message => {
  if (message.content === 'fuck you') {
    message.channel.send('https://media.giphy.com/media/d2jfPv6CUzpopfLa/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'wtf?!?') {
    message.channel.send('https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'what the fuck?') {
    message.channel.send('https://media.giphy.com/media/oKQHP89vJTUnm/source.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Michal zase píše') {
    message.channel.send('http://www.reactiongifs.com/r/2013/06/louie.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Michal je bůh') {
    message.channel.send('Hovno bůh! Je to krampus!\nhttps://cdn.japantimes.2xx.jp/wp-content/uploads/2017/12/f-krampus-a-20171209-870x586.jpg');
  }
});

client.on('message', message => {
  if (message.content === 'dafuq') {
    message.channel.send('https://thumbs.gfycat.com/AcidicFlickeringCobra-small.gif');
  }
});

client.on('message', message => {
  if (message.content === 'lol') {
    message.channel.send('https://media.giphy.com/media/O5NyCibf93upy/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'ježíš') {
    message.channel.send('https://ih0.redbubble.net/image.426448139.5540/ap,550x550,12x16,1,transparent,t.u5.png');
  }
});

client.on('message', message => {
  if (message.content === 'Jesus!') {
    message.channel.send('https://i.imgur.com/X7ETbDU.gif');
  }
});

client.on('message', message => {
  if (message.content === 'why not') {
    message.channel.send('https://media.giphy.com/media/3d2wgrPNcBqocFzFbJ/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'why not?') {
    message.channel.send('https://media.giphy.com/media/3d2wgrPNcBqocFzFbJ/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'meepo team dance') {
    message.channel.send('https://thumbs.gfycat.com/AmazingGrizzledLaughingthrush-size_restricted.gif');
  }
});

client.on('message', message => {
  if (message.content === 'nice') {
    message.channel.send('https://media.tenor.com/images/ffc13fce77b6382023968b8518cb0c49/tenor.gif');
  }
});

client.on('message', message => {
  if (message.content === 'facepalm') {
    message.channel.send('https://media1.tenor.com/images/830800d4e0fc56b7fd6ccf465c9575fc/tenor.gif');
  }
});

client.on('message', message => {
  if (message.content === 'banhammer') {
    message.channel.send('https://i.imgur.com/WOjy315.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Zapal si') {
    message.channel.send('https://media1.tenor.com/images/02090871c75cbef4e11b88f99f2ee782/tenor.gif');
  }
});

client.on('message', message => {
  if (message.content === 'a chytej!') {
    message.channel.send('https://i.makeagif.com/media/9-14-2015/1oH5R4.gif');
  }
});

client.on('message', message => {
  if (message.content === 'No Vláďo!') {
    message.channel.send('https://66.media.tumblr.com/54d3fd2bf115f3454f4155a3a24cde8d/tumblr_o2pm17shNZ1v8amego1_400.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Já čekám') {
    message.channel.send('https://media.giphy.com/media/SmpV6sKa1vBxm/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'oh, kurva') {
    message.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/060/693/c98.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Honza je bůh') {
    message.channel.send('https://i.ytimg.com/vi/BshH5rZuMC4/maxresdefault.jpg');
  }
});

client.on('message', message => {
  if (message.content === 'Michale, kde je ta loď?') {
    message.channel.send('https://media.giphy.com/media/hTh9bSbUPWMWk/200.webp');
  }
});

client.on('message', message => {
  if (message.content === 'Vláďa je bůh') {
    message.channel.send('Smrt si přichází pro tebe, Vláďíku!\nhttps://i.pinimg.com/originals/4f/ec/6b/4fec6b58f25306230f45365f85296665.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Slunění se na sluníčku') {
    message.channel.send('https://i.pinimg.com/originals/6d/2c/90/6d2c908504367c225273645ecbdfb998.gif');
  }
});

client.on('message', message => {
  if (message.content === 'rum?') {
    message.channel.send('https://media.tenor.com/images/1583c520a04015926338d5fa1b2666a6/tenor.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Rum?') {
    message.channel.send('https://media.tenor.com/images/1583c520a04015926338d5fa1b2666a6/tenor.gif');
  }
});

client.on('message', message => {
  if (message.content === 'room?') {
    message.channel.send('https://i.gifer.com/IabK.gif');
  }
});

client.on('message', message => {
  if (message.content === 'roomka?') {
    message.channel.send('https://i.gifer.com/IabK.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Honzo, kde je ta loď?') {
    message.channel.send('Moment, zaměřuji!\nhttps://thumbs.gfycat.com/EsteemedPettyCockatoo-small.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Vláďo, vidíš tu loď?') {
    message.channel.send('https://thumbs.gfycat.com/PlainImperturbableHarborseal-small.gif\nMám malý dalekohled :cry:');
  }
});

client.on('message', message => {
  if (message.content === 'Ahoj') {
    message.channel.send('https://media.giphy.com/media/FmBhzktIjvdZe/200.gif');
  }
});

client.on('message', message => {
  if (message.content === 'kill secured') {
    message.channel.send('https://media.giphy.com/media/ihVhvTGjasuha/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'Honzo, vidíš tu loď?') {
    message.channel.send('Zaostřím a uvidím nádherně\nhttps://i.imgur.com/yyTWgyL.gif');
  }
});


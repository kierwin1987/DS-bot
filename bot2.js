const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Token');
require('events').EventEmitter.defaultMaxListeners = 35;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.on('message', message => {
  if (message.content === 'fuck you') {
    message.channel.send('https://media.giphy.com/media/d2jfPv6CUzpopfLa/giphy.gif');
  }
});

client.on('message', message => {
    if (message.content === '!rip') {
      message.channel.send('https://i.imgur.com/w3duR07.png');
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
    message.channel.send('https://media.tenor.com/images/37d7671635032a538662be1f3295326d/tenor.gif');
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
  if (message.content === 'Michal je satan"') {
    message.channel.send('https://i.imgur.com/B8GGZFM.jpg');
  }
});

client.on('message', message => {
  if (message.content === 'Já čekám"') {
    message.channel.send('https://media.giphy.com/media/SmpV6sKa1vBxm/giphy.gif');
  }
});

client.on('message', message => {
  if (message.content === 'oh, kurva') {
    message.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/060/693/c98.gif');
  }
});


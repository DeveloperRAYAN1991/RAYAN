const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

////Code Streming////
client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  ); 
  let statuses = [
    `Servers: ${client.guilds.size} Users: ${client.users.size}`,
    `By RAYAN-NOMERCY`,
    `Developer RAYAN 1991`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 3000);
});

//////Code jwab//////
client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "bnera"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "bnera"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply(
      "bnera"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Reklam?") {
    msg.reply(
      "bnera"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "سڵاو ڕیکلام ئەگوڕنەوە") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "ڕیکلام") {
    msg.reply(
      "بــنــێــرە بــۆ مـــن گـــیــان"
    );
  }
});
/////Reklam////
client.on('ready' , () => {
var join = client.channels.get("967476391715164181")/// ئاید ڤۆیس
if (join) join.join()
})

client.on("message" , message => {
 
if(message.channel.type === 'dm') {
 
if (message.content.startsWith("https://discord.gg/")) {
 
  message.author.send(`https://discord.gg/gNKhDqdkhw `)/// لینکە سیرڤەرە خۆت
 
  client.channels.get("997984283404816524").send(
`> Nerdra la layan <@${message.author.id}> 
${message.content}`)
}
    }
        })

client.login("OTk4Njc4NTU5MjM5NDU4ODk2.Gi7t03.g8Elqox60xfFYWVgNE0iF8fmna0Nt9gZbjQKuM");


const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`HooliGansᵀᵉᵃᵐ`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '543267866993229825').setName("F");
client.channels.find('id', '543267866993229825').setName("FA");
client.channels.find('id', '543267866993229825').setName("FAL");
client.channels.find('id', '543267866993229825').setName("FALL");
client.channels.find('id', '543267866993229825').setName("FALLE");
client.channels.find('id', '543267866993229825').setName("FALLEG");
client.channels.find('id', '543267866993229825').setName("FALLEGA");
client.channels.find('id', '543267866993229825').setName("FALLEGA T");
client.channels.find('id', '543267866993229825').setName("FALLEGA TE");
client.channels.find('id', '543267866993229825').setName("FALLEGA TEA");
client.channels.find('id', '543267866993229825').setName("FALLEGA TEAM");
  }, 60000);
});

client.on(`ready`, ()=>{
  client.setInterval(async function(){
    let ch = client.guilds.get("378453315123675138").channels;
    let count = 0;
    ch.forEach(async function(c){
      if(c.type === "voice"){
        c.members.forEach(()=>count++);
      }
    })
    setTimeout(function(){
      ch.get("533826952088387584").setName(`VOICE ⇏「${count}」`)//count = عدد الاشخاص
    }, 500)
  }, 1000)
})

client.on('ready', () => {
let channelID = '543267866993229825';
    client.channels.get(channelID).join();
});
  
client.login(process.env.BOT_TOKEN);


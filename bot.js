const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."

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

client.on('ready', () => {
var x = client.channels.get("543267866993229825");
if (x) x.join();
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
  

client.login(process.env.BOT_TOKEN);


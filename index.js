const Discord = require("discord.js"); 

const Client = new Discord.Client; 

const prefix = "/";

Client.on("ready", () => {
    console.log ("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    member.guild.channel.cache.find(channel => channel.id === "831379845476515850").send("Bienvenue à toi," + member.displayName + "dans le serveur **Ze • Ωmega - Giveaways** ! Tu es le__" + member.guild.memberCount + "ème__ membre de ce serveur. \nIl faut impérativement que tu ailles lire le #📜・règlement et que tu coches la réaction pour avoir accès au reste du serveur. Tu peux également aller prendre tes #🎭・rôles et lire les #📑・informations si tu veux participer aux différents types de Giveaways proposés sur ce serveur !");
});

Client.on ("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  //!ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    
    if(message.content == prefix + "zig"){
        message.channel.send("zag")};
    }
});


Client.login(process.env.TOKEN);
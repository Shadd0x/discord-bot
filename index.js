import { Client as _Client } from "discord.js"; 

const Client = new _Client;

Client.login(process.env.TOKEN);

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
    
  //!zig
    if(message.content == "/zig"){
        message.channel.send("zag")};
    }
});

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json")

bot.on('ready', function() {
    bot.user.setActivity(`• Ωmega - Giveaways`, { type: "PLAYING" });
    console.log("Le bot est allumé !")
})

bot.on('messagefleactionAdd', async (reaction, member) => {
    if (member.bot) return;
    if (reaction.emoji.name == '🧧' && reaction.message.id == bdd['message-giveaway-cartes cadeaux']) {
        bdd['participants-giveaway-cartes cadeaux'].push(member.id)
        Savebdd()
        member.send('Votre participation au givewvay à bien été enregistré !').catch(err => console.log(err))
    }
})

bot.on('messageReactionRemove', async (reaction, member) => {
    if (member.bot) return;
    if (reaction.emoji.name == '🧧' && reaction.message.id == bdd['message-giveaway-cartes cadeaux']) {
        getindex = bdd['participants-giveaway-cartes cadeaux'].splice(getindex, 1);
        if (getindex => -1) {
            bdd['participants-giveaway-cartes cadeaux'].splice(getindex, 1)
        }
        Savebdd()
        member.send('Votre désabonnement au giveaway a bien été enregistré !').catch(err => console.log(err));
    }
})

bot.login(token.token)

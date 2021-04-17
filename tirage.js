const Discord = require('discord.js');
const bdd = require("../bdd.json");
const fs = require("fs")
module.exports.run = async (bot, message, args) => (
    index = Math.floor(Math.random() * Math.floor(bdd["participants-giveaway-cartes cadeaux"].length))
    (gagnant) = bot.user.cache.get(bdd["participants-giveway-cartes cadeaux"](index)) )
    console.log(index)
    bot.chanels.cache.get(bdd["channel-giveaway-cartes cadeaux"]).send('Le gagnant est : $(gagnant)').then(message => {})
    bdd["participants-giveway-cartes cadeaux"].splice(index, 1)
    Savebdd();
    
function Savebdd() {
    fs.writeFile("../bdd.json", JSON.stingify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue !");
    });
}
module.export.config = {
    name: "/end1"
}
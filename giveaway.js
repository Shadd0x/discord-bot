const Discord = require("discord.js");
const bdd = require("../bdd.json");
const fs = require("fs");
module.export.run = async (bot, message, args) => {
    if (message.content == "/giveaway") {
        if (message.member.hasPermission("ADMINISTRATOR")) return;
        bot;channels.cache.get(bbd["channel-giveaway"]).send("Giveaway de cartes cadeaux").then(message => {
            message.react("🧧");
            bbd["message-giveaway"] = message.id;
            Savebbd();
        });

    }

}
function Savebbd() {
    fs.writeFile("../bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}
module.export.config = {
    name: "/giveaway1"
}
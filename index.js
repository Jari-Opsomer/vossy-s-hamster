const { Client, Intents } = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once("ready", () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("with my wheel", {type: "PLAYING"});

});

client.on("messageCreate", message => {

    if(message.author.bot) return;

    var prefix = botConfig.prefix

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command == `${prefix}hi`) {
        return message.channel.send("**Hi, I'm Vossy's hamster!** 🐹");

    }

});

client.login(prcess.env.token);


// GEKOPIEERD VAN ANDERE BOT //

const botConfig = require('./botConfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.once('ready', () => {
    console.log(`${client.user.username} is online.`);

});

// ORIGINELE CODE //

//const { Client, Intents } = require("discord.js");
//const botConfig = require("./botConfig.json");

//const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

//client.once("ready", () => {

    //console.log(`${client.user.username} is online.`);
    //client.user.setActivity("with my wheel", {type: "PLAYING"});

//});

client.on("messageCreate", message => {

    if(message.author.bot) return;

    var prefix = botConfig.prefix

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command == `${prefix}hi`) {
        return message.channel.send("**Hi, I'm Vossy's hamster!** 🐹");

    };

});

client.login(process.env.token)

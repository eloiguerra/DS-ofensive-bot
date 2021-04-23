require("dotenv/config");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const cliente = new Discord.Client();

let active = true;

cliente.on("ready", () => {
  console.log(`Bota no alto`);
});

cliente.on("message", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "!pocas") active = !active;

  if (!active) return;

  if (msg.content !== "") {
    fetch("http://xinga-me.appspot.com/api")
      .then((res) => res.json())
      .then(({ xingamento }) => msg.reply(xingamento));
  }
});

cliente.login(process.env.TOKEN);

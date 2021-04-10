require("dotenv/config");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const cliente = new Discord.Client();
const ofensas = ["teu pai, gay", ""];

cliente.on("ready", () => {
  console.log(`Bota no alto`);
});

cliente.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "eloiguerra"
  );

  console.log(member);

  if (!channel) return;
  const resp = Math.floor(Math.random() * boasVindas.length);

  channel.send(resp.replace("#", member));
});

cliente.on("message", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "o que é híbica ?") {
    return msg.reply("Hibica o cú que eu meto a pika kkkkkj");
  }

  if (msg.content !== "") {
    fetch("http://xinga-me.appspot.com/api")
      .then((res) => res.json())
      .then(({ xingamento }) => msg.reply(xingamento));
  }
});

cliente.login(process.env.TOKEN);

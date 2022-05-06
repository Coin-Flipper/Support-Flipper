const app = require('express')();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('App listening at http://localhost:3000'));


const Discord = require('discord.js');
const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_WEBHOOKS', 'GUILD_MEMBERS'],
	repliedUser: false,
});


const fs = require('fs');
const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);

	if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
	else client.on(event.name, (...args) => event.execute(...args, client));
}


require('dotenv').config();
client.login(process.env['token']);
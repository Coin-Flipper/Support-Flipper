const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS', 'GUILD_WEBHOOKS', 'GUILD_MEMBERS'],
	repliedUser: false
});
const fs = require('fs');

client.text_commands = new Discord.Collection();
const categories = fs.readdirSync(`${__dirname}/text_commands/`);
for (const category of categories) {
	const commandFiles = fs.readdirSync(`${__dirname}/text_commands/${category}`).filter(File => File.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`${__dirname}/text_commands/${category}/${file}`);
		client.text_commands.set(command.name, command);
	}
}

const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);
	if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
	else client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(process.env['token']);
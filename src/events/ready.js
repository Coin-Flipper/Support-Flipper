const fs = require('fs');
const { Collection } = require('discord.js');

module.exports = {
	name: "ready",
	once: true,
	async execute(client) {

		const servers = client.guilds.cache.size;

		const time = new Date();
		const startTime = `${time.getHours()}:${time.getMinutes()}, ${time.getDate()}/${time.getMonth()}/${time.getFullYear()} UTC`;

		client.user.setPresence({
			status: "online",
			activities: [{ type: `WATCHING`, name: `And Helping Coins Flip` }]
		});

		console.log(`Last restart: ${startTime}\n\nLogged in as ${client.user.tag}! looking over ${servers} servers`);

		/* Registering slash commands */
		client.commands = new Collection();
		const data = [];

		const categories = fs.readdirSync(`${__dirname}/../commands/`);
		for (const category of categories) {
			const commandFiles = fs.readdirSync(`${__dirname}/../commands/${category}`).filter(file => file.endsWith('.js'));
			for (const file of commandFiles) {

				const command = require(`${__dirname}/../commands/${category}/${file}`);
				client.commands.set(command.name, command);
				data.push(command);

			}
		}

		/* Set ApplicationCommand data */
		await client.application.commands.set(data);

	}
};
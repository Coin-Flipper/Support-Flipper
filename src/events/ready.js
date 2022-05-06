module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {

		const servers = client.guilds.cache.size;

		const time = new Date();
		const startTime = `${time.getHours()}:${time.getMinutes()}, ${time.getDate()}/${time.getMonth()}/${time.getFullYear()} UTC`;

		client.user.setPresence({
			status: 'online',
			activities: [{ type: 'WATCHING', name: 'And Helping Coins Flip' }],
		});

		console.log(`Last restart: ${startTime}\n\nLogged in as ${client.user.tag}! looking over ${servers} servers`);

	},
};
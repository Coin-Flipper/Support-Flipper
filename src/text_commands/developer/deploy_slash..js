const fs = require('fs');

module.exports = {
	name: 'deploy_slash',
	description: "Deploy and update slash commands!",
	developerOnly: true,
	aliases: ['update_slash', "deployslash", "updateslash"],
	async execute(message, args, prefix, client) {

		if(message.author.id != '732667572448657539') { return; }

		let data = [];

		const commandFiles = fs.readdirSync(`${__dirname}/../../slash_commands/`).filter(File => File.endsWith('.js'));
		for (const file of commandFiles) {
			const cmd = require(`${__dirname}/../../slash_commands/${file}`);
			data.push({
				name: cmd.name,
				description: cmd.description,
				options: cmd.options
			});
		}

		await client.guilds.cache.get('832245298578849822').commands.set(data);
	}
};
const GhostPing = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageUpdate',
	async execute(oldMessage, newMessage) {

		GhostPing.detector("messageUpdate", oldMessage, newMessage).catch(() => {
			/*  */
		});

	}
};
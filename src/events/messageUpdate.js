const { detector } = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageUpdate',
	async execute(oldMessage, newMessage) {

		detector("messageUpdate", oldMessage, newMessage);

	}
};
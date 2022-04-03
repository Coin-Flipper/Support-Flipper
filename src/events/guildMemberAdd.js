const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
	name: "guildMemberAdd",
	async execute(member, client) {

		if(!member.guild == "832245298578849822") return;

		client.channels.cache.get("832245298969182243").send({ content: `Hey ${member}! Welcome to the server.` });

		const embed = new MessageEmbed()
			.setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.displayAvatarURL()}` })
			.setTitle(`${member.user.tag} Just Joined The Server!`)
			.setColor(`GREEN`)
			.addFields(
				{ name:`__Account Creation__`, value:`${moment(member.user.createdAt)}`, inline: false },
				{ name:`__Account ID:__`, value:`${member.id}`, inline: false },
				{ name:`__Account Ping:__`, value:`${member}`, inline: false }
			);
		client.channels.cache.get("832245299409846307").send({ embeds: [embed] });

		member.roles.add('832271206165119016');

	}
};
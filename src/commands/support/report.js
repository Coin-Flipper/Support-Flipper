const Discord = require('discord.js');

module.exports = {
	name: 'report',
	description: 'Submit a bug report to the Developers.',
	options: [
		{
			name: 'name',
			description: 'Bug report name:',
			type: 'STRING',
			required: true
		},
		{
			name: 'description',
			description: 'General explanation of the bug along with steps to reproduce.',
			type: 'STRING',
			required: true
		},
	],
	async execute(interaction, client) {

		await interaction.defer({ ephemeral: false });

		const name = interaction.options.get("name").value;
		const description = interaction.options.get("description").value;

		const embed = new Discord.MessageEmbed()
			.setTitle(`${name}`)
			.setDescription(`${description}`)
			.setColor('RED')
			.setAuthor({ name: `${interaction.member.user.tag}`, iconURL: `${interaction.member.user.displayAvatarURL()}` })
			.setFooter({ text: `ID: ${interaction.member.id}` })
			.setTimestamp();

		const channel = client.channels.cache.get(`870595027263443005`);
		channel.send({ embeds: [embed] }).catch(async (err) => {

			const error = new Discord.MessageEmbed()
				.setTitle('An error occured')
				.setColor('RED')
				.setDescription(`Sorry, I was unable to submit your report\n**${err}**`);

			await interaction.send({ embeds: [error] });
			return;
		});

		interaction.followUp({ content: 'Your report has been submitted.' });
	}
};
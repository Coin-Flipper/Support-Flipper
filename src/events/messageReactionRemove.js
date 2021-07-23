const Discord = require('discord.js')

module.exports = {
	name: 'messageReactionRemove',
	async execute(messageReaction, user) {
        const { message, emoji } = messageReaction; 

        if(user.bot || message.id != "832274425301827634" &&message.id != "832247427615555605") return; 

        const member = await message.guild.members.cache.get(user.id);

        if(emoji.id === "832282116732878888") { 
            member.roles.remove("832245298578849825")
            // update
        }
        if(emoji.id === "832282116683333632") { 
            member.roles.remove("832245298578849823")
            //milestone
        }
        if(emoji.id === "832282116481613896") { 
            member.roles.remove("832245298578849824")
            //giveaway
        }
        if (emoji.id === "838005009462853632") {
            member.roles.remove("832353061300600862");
            // event
        }
        if(emoji.name == "✅"){
            member.roles.remove("832271206165119016")
            // member role
        }
    }
}
const Discord = require('discord.js');
const { ChatInputCommandInteraction } = require("discord.js");
module.exports = {
    id: "Usuario",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        try {
            const avatar = new Discord.EmbedBuilder()
                .setTitle(`Este es tu Avatar` + interaction.user.username)
                .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setColor("Random")
                .setFooter({ 
                    text: `My Queen https://discord.gg/4Z7QZ7Y`, 
                    iconURL: interaction.user.displayAvatarURL({ dynamic: true }) 
                })
                .setTimestamp()
            interaction.reply({ embeds: [avatar], ephemeral: true })
        } catch (e) {
            interaction.reply({
                embeds: [new Discord.EmbedBuilder()
                    .setTitle(`<:VS_cancel:1006609599199186974> New status code invalid?`)
                    .setDescription(`\`\`\`yml\n${e}\`\`\``)
                    .setColor("Random")
                    .setFooter({ 
                        text: `My Queen https://discord.gg/4Z7QZ7Y`,
                        iconURL: interaction.user.displayAvatarURL({ dynamic: true })
                    })
                ], ephemeral: true
            })
        }
    }
}
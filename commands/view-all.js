// Admin-only command to see all mappings

const { SlashCommandBuilder } = require('@discordjs/builders');
const ethers = require("ethers")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('view-all')
		.setDescription('Admin Only - View all mapped Ethereum addresses'),

	async execute(interaction) {


    const ethAddress = hashmap.get(interaction.user.tag)
    
    return interaction.reply({
        content: `Your Ethereum address is ${ethAddress}`,
        ephemeral: true
    });
    }
}

// Set up role-permissions in index.js
// https://discordjs.guide/interactions/slash-commands.html#user-permissions
// Set up download of .json 
// https://2ality.com/2015/08/es6-map-json.html
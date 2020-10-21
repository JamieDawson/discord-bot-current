require('dotenv').config();
const axios = require('axios');

const Discord = require('discord.js');
const client = new Discord.Client();

function main() {
	client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`);
	});

	client.on('message', async (msg) => {
		if (msg.author.bot) {
			return;
		}

		//if someone types !hello. Run this serverless function and return the values.
		if (msg.content.startsWith('!hello')) {
			// msg.reply('world!');
			axios
				.get(
					'https://apigcp.nimbella.io/api/v1/web/jamierob-hzoysjqazdd/default/plusUltra.json'
				)
				.then(function (response) {
					// handle success
					const value = response.data.body;
					//console.log(response.data.body);
					msg.reply(value);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					msg.reply('screwed up');
				});
		}
	});

	client.login(process.env.DISCORD_BOT_TOKEN);
}

module.exports.main = main;

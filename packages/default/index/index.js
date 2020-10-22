require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();
const apitoken = process.env.APITOKEN;

function main() {
	return new Promise(function (resolve, reject) {
		client.on('ready', () => {
			console.log(`Logged in as ${client.user.tag}!`);
		});

		client.on('message', async (msg) => {
			console.log(msg);
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
						const value = response.data.body;
						//console.log(response.data.body);
						msg.reply(
							value +
								msg.author +
								' 464463test ' +
								new Date() +
								' ' +
								process.env.__OW_ACTIVATION_ID
						);
					})
					.catch(function (error) {
						// handle error
						console.log(error);
						msg.reply('screwed up');
					});
			}
		});

		setTimeout(function () {
			resolve({done: true});
		}, 59500);

		client.login(apitoken);
	});
}

module.exports.main = main;

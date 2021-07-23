const { Client, MessageEmbed, message } = require('discord.js');
const { createConnection } = require('mysql');
const config = require('./config.json');

const DiscordID = "0";
const client = new Client();

const D72Dadminrole = message.guild.roles.find(r => r.id === "798292432961273896");
const ingamechatrole = message.guild.roles.find(r => r.id === "851691904797114408");
const adminrole = message.guild.roles.find(r => r.id === "643033762497691670");

let con = createConnection(config.mysql);

client.on('message', message => {
	if (message.content === "!ping" ) {
		message.reply('pong');
	};
	if (message.content === "!add") {
		con.query("Select * FROM blacklist where discord_id=?", uzivatel, (err, row) => {

			if (row > 0 ) {
				const DiscordID = row[0].discord_id;
			}

			if (message.author.id === DiscordID) {
				let InfoEmbed = new MessageEmbed()
					.setTitle('Uzivatel na blacklistu')
					.setTimestamp()
					.setColor('RED')
					.addField("Uživatel je již na blacklistu a proto není možné mu přidat roli. Pro více info pouzij '!checkuser @uzivatel'")
				message.channels.send(InfoEmbed);
			} else if (message.member.roles.has(ingamechatrole)) {
				message.reply('Uživatel již má roli.');
			} else {
				message.author.roles.add(ingamechatrole);
				message.reply(" role přidána.");
			}

			
		});
		con.end();
		
	};
	if (message.content.startsWith("!remove")) {
		if (uzivatel.role.has(role)) {
			uzivatel.role.remove(role);
		} else {
			message.reply("Uzivatel roli nemá, proto ji nelze odebrat");
		}
	};
	if (message.content.startsWith("!BL")) {
		const args = message.content.slice(config.client.prefix).trim().split(' ');
		if (!args[0]) {
			message.reply("Uzivatel je vyzadován pro přidání na seznam hříšníků");
		} else {
			let uzivatel = message.mentions.users.first();
			let zablokoval = message.author;
			let duvod = args.join(" ").slice(22);
			if (!duvod) {duvod = "Bez udání důvodu"};
			con.query(`INSERT INTO blacklist (discord_id, duvod, zablokoval) VALUES ${uzivatel, duvod, zablokoval}`, err => {
				if (err) {
					message.reply(err);
				} else {
					message.reply("Uživatel přidán na blacklist")
				}
			});

		}
		con.end();
	};
	if (message.content.startsWith("!RBL")) {
		const args = message.content.slice(config.client.prefix).trim().split(' ');
		let uzivatel = message.mentions.users.first();

		con.query(`SELECT * FROM blacklist WHEHE discord_id = '${uzivatel}'`, (err ,row) => {
			let discord_id = row[0].discord_id;
			if (uzivatel === discord_id) {
				con.query(`DELETE FROM blacklist WHERE discord_id = '${discord_id}'`, err => {
					if (err) {
						message.reply(err + "\n\nProsim, kontaktujte @Admins s chybovou hláškou.")
					} else {
						message.reply("Odstraněn z black listu.")
					}
				})
			}
		})
		con.end();
	};
	if (message.content.startsWith("!checkuser")) {
		const args = message.content.slice(config.client.prefix).trim().split(' ');
		if (!args[0]) {
			var uzivatel = message.mentions.users.first();
		}
		
		if (uzivatel === "") {
			var uzivatel = message.author;
		}

		con.query(`SELECT * FROM blacklist WHEHE discord_id = '${uzivatel}'`, (err, row) => {
			if (err) {
				console.log("Chyba spojení")
			} else {
			let discord_id = row[0].discord_id;
			if (uzivatel === discord_id) {
				var duvod = row[0].duvod;
				var zablokoval = row[0].zablokoval;
				var CheckEmbed = new MessageEmbed()
					.setTitle(uzivatel)
					.setColor("RED")
					.addField("Uživatel:", true)
					.addField(uzivatel, true)
					.addField()
					.addField("Důvod:", true)
					.addField(duvod)
					.addField()
					.addField("Zablokoval:", true)
					.addField(zablokoval, true)
					.setTimestamp()
				
				message.channels.send(CheckEmbed);
			} else {
				message.reply("Uzivatel není na black listu");
			}
		};
	}
		)
		con.end();
	}
});

client.login(config.client.token);

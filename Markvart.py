import discord
client = discord.Client()


@client.event
async def on_message(message):
	id = client.get_guild(361965501666033667)

	if message.content.find("dafuq") != -1:
		await message.channel.send("https://thumbs.gfycat.com/AcidicFlickeringCobra-small.gif")
	elif message.content == "!users":
		await message.channel.send(f"""# of Members: {id.member_count}""")
	elif message.content == "!pozvanka":
		await message.channel.send("https://discord.gg/jxYaSJj!")
	elif message.content == "facepalm":
		await message.channel.send("https://media1.tenor.com/images/830800d4e0fc56b7fd6ccf465c9575fc/tenor.gif")
	elif message.content == "LOL":
		await message.channel.send("https://thumbs.gfycat.com/DefinitiveAdeptAquaticleech-size_restricted.gif")

client.run('Token')
client = MyClient()

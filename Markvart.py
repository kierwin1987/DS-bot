import discord
client = discord.Client()


@client.event
async def on_message(message):
	id = client.get_guild(361965501666033667)

	if message.content.find("dafuq") != -1:
		await message.channel.send("https://thumbs.gfycat.com/AcidicFlickeringCobra-small.gif")
	elif message.content == "!users":
		await message.channel.send(f"""Počet členů: {id.member_count}""")
	elif message.content == "!pozvanka":
		await message.channel.send("https://discord.gg/jxYaSJj!")
	elif message.content == "facepalm":
		await message.channel.send("https://media1.tenor.com/images/830800d4e0fc56b7fd6ccf465c9575fc/tenor.gif")
	elif message.content == "LOL":
		await message.channel.send("https://thumbs.gfycat.com/DefinitiveAdeptAquaticleech-size_restricted.gif")

# idle status
@is_admin
async def idle(client, message, parameter):
    await client.change_presence(status=discord.Status.idle,
                                 activity=discord.Game(name='with live wires'),
                                 afk=True)

@bot.event
async def on_member_join(member):
    role = discord.utils.get(member.server.roles, id="377865260377571339")
    await bot.add_roles(member, role)

@client.command()
@commands.has_any_role("DS admin")
async def ban (ctx, member:discord.User=None, reason =None):
    if member == None or member == ctx.message.author:
        await ctx.channel.send("You cannot ban yourself")
        return
    if reason == None:
        reason = "For being a jerk!"
    message = f"You have been banned from {ctx.guild.name} for {reason}"
    await member.send(message)
    # await ctx.guild.ban(member, reason=reason)
    await ctx.channel.send(f"{member} is banned!")

client.run(token)
client = MyClient()

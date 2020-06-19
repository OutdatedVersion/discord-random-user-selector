 
import { Client, Message, User, Guild } from 'discord.js'

const discordClient = new Client()

discordClient.on('message', async (message: Message) => {
    if (message.author.id === discordClient.user.id 
        || message.channel.type !== 'text'
        || !isTriggerMessage(message.content)) {
        return
    }

    await sendRandomUser(message.author, message.guild)
    await message.delete()
})

discordClient.login(process.env.DISCORD_TOKEN)

/**
 * Send the provided user, via private message, a
 * randomly selected user from the provided guild.
 * 
 * @param {User} user Notification user
 * @param {Guild} guild Guild to select member from
 */
async function sendRandomUser(user: User, guild: Guild) {
    const members = await guild.members.fetch()
    const { user: victim } = members.random()

    await user.send(`Selected \`${victim.username}#${victim.discriminator}\` from '${guild.name}'`)
}

function isTriggerMessage(content: string) {
    return content.toLowerCase().startsWith('-random')
}
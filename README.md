# Random User Selector

A simple Discord bot to select a random user from a guild. Created because of [this](https://www.reddit.com/r/discordapp/comments/hbnvaj/a_bot_that_randomly_selects_1_user_from_the_server/) post on Reddit.  

## Usage

- [Authorize bot](https://discord.com/api/oauth2/authorize?client_id=723417759534284831&permissions=8192&scope=bot)
  - Asks for "Manage Messages" to remove the command message
- Use `-random` in the guild you want a random user from

## Installation

- Docker
  - Find latest image from the list [here](https://github.com/OutdatedVersion/discord-random-user-selector/packages)
    - primary branch (recommended): `docker.pkg.github.com/outdatedversion/discord-random-user-selector/discord-random-user-selector-bot:latest`
  - Example of setup in `docker-compose.yml`
    - Be sure to set `DISCORD_TOKEN` to a [Discord API token](https://discord.com/developers/applications).

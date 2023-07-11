const { Client, GatewayIntentBits, Partials, Collection, Options } = require(`discord.js`);
const { Guilds, GuildMembers, GuildMessages, GuildMessageReactions, GuildVoiceStates, GuildEmojisAndStickers, GuildPresences, GuildInvites } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Reaction, Channel } = Partials;

const { DiscordTogether } = require("discord-together");
const config = require(`./config.json`);
const Enmap = require("enmap");
const chalk = require("chalk");
const Discord = require("discord.js");
const fs = require("fs");
require("colors")

const client = new Client({
  sweepers: {
    ...Options.DefaultSweeperSettings,
    messages: {
      interval: 3600,
      lifetime: 1800,
    }
  },
  makeCache: Options.cacheWithLimits({
    ...Options.DefaultMakeCacheSettings,
    ReactionManager: 0,
    ThreadManager: 0,
  }),
  fetchAllMembers: false,
  restTimeOffset: 0,
  failIfNotExists: false,
  allowedMentions: {
    parse: ["users", "roles"],
    repliedUser: false,
  },
  intents: [ Guilds, GuildMembers, GuildMessages, GuildMessageReactions, GuildVoiceStates, GuildEmojisAndStickers, GuildPresences, GuildInvites ],
  partials: [ User, Message, GuildMember, ThreadMember, Reaction, Channel ],
});

const { loadEvents } = require(`./Handlers/Events`);
const { loadModals } = require("./Handlers/Modals");
const { loadSelectMenus } = require("./Handlers/SelectMenu");
const { loadButtons } = require("./Handlers/Buttons");
const { loadConfig } = require("./Functions/configLoader");
const { embedPages } = require("./Handlers/Paginas");

client.commands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.selectMenus = new Collection();
client.events = new Collection();

client.la = {}
var langs = fs.readdirSync("./Languages")
for (const lang of langs.filter(file => file.endsWith(".json"))) {
  client.la[`${lang.split(".json").join("")}`] = require(`./Languages/${lang}`)
}
Object.freeze(client.la)

loadButtons(client);
loadModals(client);
loadSelectMenus(client);
loadEvents(client);
loadConfig(client);

function requirePlugins() {
  [ "anticrash", "sorteos" ].forEach(plugins => {
    try { require(`./Plugins/${plugins}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
  });
  [ "joinvc", "loaddb" ].forEach(plugins => {
    try { require(`./Plugins/${plugins}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
  });
} requirePlugins();

client.cookiescooldowns = new Collection();
client.discordTogether = new DiscordTogether(client);
client.guildConfig = new Collection();

client.color = config.color;
client.login(config.token);

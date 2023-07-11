const Discord = require("discord.js");
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { readdirSync } = require('fs');
const { embedPages } = require("../../Handlers/Paginas");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ayuda")
        .setDescription("🌍 Muestra la lista de comandos y sus categorias"),
    async execute(interaction, client) {

        let dias = Math.floor(client.uptime / 86400000)
        let horas = Math.floor(client.uptime / 3600000) % 24
        let minutos = Math.floor(client.uptime / 60000) % 60
        let segundos = Math.floor(client.uptime / 1000) % 60

        const a = readdirSync(`./Commands/🌍 Publicos`).filter(archivo => archivo.endsWith('.js'));
        const b = readdirSync(`./Commands/🎉 Setups`).filter(archivo => archivo.endsWith('.js'));
        const c = readdirSync(`./Commands/🎮 Gamings`).filter(archivo => archivo.endsWith('.js'));
        const d = readdirSync(`./Commands/🎯 Menus`).filter(archivo => archivo.endsWith('.js'));
        const e = readdirSync(`./Commands/🏫 Herramientas`).filter(archivo => archivo.endsWith('.js'));
        const f = readdirSync(`./Commands/👑 Developer`).filter(archivo => archivo.endsWith('.js'));
        const g = readdirSync(`./Commands/🔰 Administracion`).filter(archivo => archivo.endsWith('.js'));
        const h = readdirSync(`./Commands/🤩 Diversion`).filter(archivo => archivo.endsWith('.js'));
        const y = readdirSync(`./Commands/🤬 Creadores`).filter(archivo => archivo.endsWith('.js'));
        const z = readdirSync(`./Plugins`).filter(archivo => archivo.endsWith('.js'));

        const embeds = [
            new EmbedBuilder()
                .setAuthor({
                    name: "Lista de Comandos del Servidor!",
                    iconURL: client.user.avatarURL()
                })
                .setDescription(`Hola soy **${client.user.username}** Un bot de Utilidades Multiples.`)
                .addFields(
                    {
                        name: `<:discord:1026467991409401886> __Como Funciono ?__`,
                        value: `> \`1.\` Para hacer **control** de todas mis funciones usa \`/admin panel\`\n> \`2.\` Poseo un sistema de **ranking** que se actualiza cada semana\n> \`3.\` Modero sistemas de manera automatica.\n> \`4.\` Se crean registros de actividad cada **2 dias** del bot`,
                    },
                    {
                        name: `<:livre:1026467985973592124> __Que se Registra ?__`,
                        value: `> \`1.\` Usuarios sancionados como spaming en el servidor\n> \`2.\` Entrada de usuarios malisiosos y actividades del servidor\n> \`3.\` Manejo de tickets y reportes de usuarios\n> \`4.\` Registro de usuarios que se unen al servidor mas de 2 veces`,
                    },
                    {
                        name: `<:Pepefino:1010774486209019914> __Soporte de Servidores ?__`,
                        value: `> \`1.\` Si tienes alguna duda o problema con el bot puedes usar \`/reporte\`\n> \`2.\` Puedes abrir un ticket para una mejor atencion del problema\n> \`3.\` Recuerda que todo usuario blacklisteado se le sube a el globalban.`,
                    },
                    {
                        name: `<:VS_froom:1026467689209806858> __Datos Actuales ?__`,
                        value: `> ⚙️ **${client.commands.size} Comandos**\n> \`${dias} dias\`, \`${horas} horas\`, \`${minutos} minutos\`, \`${segundos} segundos\` de **actividad**\n> 👥 en **${client.guilds.cache.size} Servidores**\n> ✨ con **${client.ws.ping}ms** de ping\n> 📊 con **${z.length} Plugins Activos**`,
                    }
                )
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🌍 Lista de Publicos`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(a.length >= 1 ? `>>> *${a.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🎉 Lista de Setups`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(b.length >= 1 ? `>>> *${b.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🏫 Lista de Gaming`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(c.length >= 1 ? `>>> *${c.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `👑  Lista de Menus`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(d.length >= 1 ? `>>> *${d.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🔥 Lista de Herramientas`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(e.length >= 1 ? `>>> *${e.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🤩 Lista de Developer`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(f.length >= 1 ? `>>> *${f.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🤬 Lista de Administracion`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(g.length >= 1 ? `>>> *${g.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🪁 Lista de Diversion`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(h.length >= 1 ? `>>> *${h.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🤬 Lista de Creadores`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription(y.length >= 1 ? `>>> *${y.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),

            new EmbedBuilder()
                .setAuthor({
                    name: `🤬 Lista de Componentes de Bot`,
                    iconURL: client.user.avatarURL()
                })
                .setDescription([
                    `Hola estos son los datos del **Bot** ${client.user.username}`,
                    `\`•\` Botones(\`${client.buttons.size}\`)`,
                    `\`•\` Modales(\`${client.modals.size}\`)`,
                    `\`•\` Menus(\`${client.selectMenus.size}\`)`,
                    `\`•\` Eventos(\`${client.events.size}\`)\n`,
                    `Cuento con grandes sistemas de moderacion y addons activos actualmente espero serte de ayuda en tu servidor`
                ].join("\n"))
                .setFooter({
                    text: `Solicitado por ${interaction.user.username}`,
                    iconURL: interaction.user.avatarURL()
                })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setColor('Blue'),
        ];

        await embedPages(interaction, embeds);
    }
}
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
const voice = {
    menu: 'media/AUD-20240901-WA0161.mp3'
}

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',
search: '',
ai: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = ` *👋 Hello ${pushname}*

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗! ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ :ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ [ᴅᴀʀᴋ ᴄʏʙᴇʀ ᴍᴀᴛʀɪx]
│◈ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : 94711451319
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 2.0.0
╰──────────●●►
*╭━─≪ ✠ || ✠ ≫─━╮
*├ 1 • OWNER*
*├ 2 • CONVERT*
*├ 3 • AI*
*├ 4 • SEARCH*
*├ 5 • DOWNLOAD*
*├ 6 • MAIN*
*├ 7 • GROUP*
*├ 8 • FUN*
*├ 9 • TOOLS*
*├ 10 • OTHER*
*├ 11 • NEWS*
*├ 12 • MOVIE*
*╰━─≪ ✠ || ✠ ≫─━╯

_*🔢 Reply with the Number you want to select*_

> *👨‍💻ռǟɖɛɛռ ʍɖ ɮʏ ռǟɖɛɛռ քօօʀռǟ👨‍💻*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/2nmi9q.png"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──────OWNER COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.owner} 
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                        break;
                    case '2':               
                        reply(`*◈╾──────CONVERT COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.convert 
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                        break;
                    case '3':               
                        reply(`*◈╾──────AI COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.ai}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                        break;
                    case '4':               
                        reply(`*◈╾──────SEARCH COMMAND LIST──────╼◈*

╭────────●●►
${menu.search}
.news (English)
.derananews
.sirasanews
.hirunews
.startnews (auto news on)
.stopnews (auto news off)
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                        break;
                    case '5':               
                        reply(`*◈╾──────DOWNLOAD COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.download}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                     break;
                 case '6':               
                        reply(`*◈╾──────MAIN COMMAND LIST──────╼◈*
                        
╭────────●●►
${menu.main}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                     break;
                 case '7':   
                        reply(`*◈╾──────GROUP COMMAND LIST──────╼◈*
                        
╭────────●●►
 ${menu.group}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                     break;
                 case '8':  
                        reply(`*◈╾──────FUN COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.fun}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                         break;
                 case '9':  
                        reply(`*◈╾──────TOOLS COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.tools}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                        break;
                 case '10':  
                        reply(`*◈╾──────OTHER COMMAND LIST──────╼◈*

╭────────●●►
 ${menu.other}
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                         break;
                 case '11':  
                        reply(`*◈╾──────NEWS COMMAND LIST──────╼◈*

╭────────●●►
.news (English)
.derananews
.sirasanews
.hirunews
.startnews (auto news on)
.stopnews (auto news off)
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);
                        break;
                 case '12':  
                        reply(`*◈╾──────MOVIE COMMAND LIST──────╼◈*

╭────────●●►
.movie
.cinerulk
.cinesubz
.ytsmx
.ginisisila
.sinhalasub
.upmv
.mkv
.upzip
.upme
.uptv
╰────────────────────●●►


> *©𝙽𝙰𝙳𝙴𝙴𝙽 𝙼𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 𝙿𝙾𝙾𝚁𝙽𝙰*`);

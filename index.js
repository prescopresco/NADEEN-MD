const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('@whiskeysockets/baileys')

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const prefix = '.'
const { mongodb_connection_start, start_numrep_process, upload_to_mongodb, get_data_from_mongodb, storenumrepdata, getstorednumrep } = require('./lib/nonbutton')

const ownerNumber = ['94711451319']

//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
const sessdata = config.SESSION_ID
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log("Session downloaded ✅")
})})}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//=============================================

async function connectToWA() {
console.log("Connecting NADEEN-MD BOT 💫...");
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
var { version } = await fetchLatestBaileysVersion()

const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
        })
    
conn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
}
} else if (connection === 'open') {
console.log('🌠 Installing')
const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
}
});
console.log('Plugins installed successful ✅')
await start_numrep_process();
console.log('Bot connected to whatsapp ✅')

let up = `🚀 *_NADEEN-MD MOVIE-DL-X Connected Successfully!_* ✅ 

--- *😈🎉 _Welcome to NADEEN-MD MOVIE DOWNLOER BOT!_* 🎉😈 

*🔹 PREFIX:* ${prefix}
*🔹 OWNER:* ${ownerNumber}
*🔹 MADE BY:* Nadeen Poorna
_*🕺Enjoy your time with us!😊*_

*👨‍💻ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ👨‍💻* `;

await conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image: { url: `https://files.catbox.moe/2elpxs.png` }, caption: up })

}
})
conn.ev.on('creds.update', saveCreds) 

  conn.getstorednumrep = async (quotedid, jid, num,conn,mek) => { 
  return await getstorednumrep(quotedid, jid, num,conn,mek);
        };
        

conn.ev.on('messages.upsert', async(mek) => {
mek = mek.messages[0]
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key])
}
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const quotedid = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.stanzaId || null : null
           
           let body;
              if (type === 'conversation') {
              body = mek.message.conversation;
            } else if (type === 'extendedTextMessage') {
                const storedNumRep = await getstorednumrep(quotedid, from, mek.message.extendedTextMessage.text, conn, mek) 
              body = storedNumRep ? storedNumRep : mek.message.extendedTextMessage.text;
              
            } else if (type == 'interactiveResponseMessage' ) {
              body = mek.message.interactiveResponseMessage  && mek.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id;
if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup && config.MODE === "groups") return
//=========OWNER - REACTION ===============================  
if(senderNumber.includes("94711451319")){
if(isReact) return
m.react("👨🏻‍💻")
}
if(senderNumber.includes("94779483535")){
if(isReact) return
m.react("🌜")
}
if(senderNumber.includes("94775383340")){
if(isReact) return
m.react("™")
}
if(senderNumber.includes("94753751559")){
if(isReact) return
m.react("™")
}
if(senderNumber.includes("94716769285")){
if(isReact) return
m.react("🎉")
}
//=====================✓

if (config.AUTO_VOICE === 'true') {    
const url = 'https://raw.githubusercontent.com/Nadeenpoorna-max/NADEENMD_DATABASED/main/autovoice/NADEEN-DATA'
let { data } = await axios.get(url)
for (vr in data){
if((new RegExp(`\\b${vr}\\b`,'gi')).test(body)) conn.sendMessage(from,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:mek})   
 }}
//====================================//
        
const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})

try {
cmd.function(conn, mek, m,{from, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
} catch (e) {
console.error("[PLUGIN ERROR] " + e);
}
}
}
events.commands.map(async(command) => {
if (body && command.on === "body") {
command.function(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (mek.q && command.on === "text") {
command.function(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
}});

})
}
app.get("/", (req, res) => {
res.send("hey, NADEEN-MD started✅");
});
app.listen(port, () => console.log(`Nadeen md Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 4000); 

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QwIQyZBQ#c6W0rI7QVqeS0fSp8cWCZqH2BFkQAJnGEwPPvKDahGc", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
MODE: process.env.MODE || "public", //private,public,groups or inbox
AUTO_VOICE:"true" //true or false
};

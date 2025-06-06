const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61VyW6jSBh+l7raasDsliINmzHG2MQYYjyaQ8UUuMxqKLy1cul+gnmF0RzmPo+UFxnhJNORuifJSM0Jqor/W+pfPoOixA2y0RkMP4OqxgdIUPdKzhUCQ6C2cYxq0AcRJBAMAbSEkTlNKbjytsvAMtXWax1dqQyu9HEoRkePki7mLi3Hmxvw0AdVe5/hzRsBI7hclJPjgreZsTiecHWjnw++Mg+ChLAp9ilBdPZYuXXHtzfgoYsIcY2LxKi2KEc1zGx0diGuP0Z/b+uZExmUtWr3YsGbzkIv9JGxn1P3EmNqQnVhtc2KNAfa/xh9U+HCNvPkqXXZrVwlmPV8srtkxmgh9MKZMbWFi+LL9Jwvyif6DU4KFFkRKggm5w/7Ls0cZuPOe3A9obeBXLeH1ZhKKigLtVjmraB7xYUctHx953yMuDPNvLGhb3d56NZ85ZlkX562iyrVR8ejvZ7kW7fKWLFId+Fr4m79kivp//HdH4s5Raf+pg62enOajqGjWdPlZTee0Xhy6i0ac8XlWlixxsfo1wGsLClg7xKPiptcUyhu2Zupx+AkZ/CUtqFrxMdVYW1X1jf6kLT1Wyw9mzpGbLAI9HQQF5phXgy868lltqL3d/a9oftBytN3Jg4n6dmF642pz49trKnScX/PnlKGntMwE3pBLwn9NAxOqaDtkpurohSdrQgMmYc+qFGCG1JDgsuiW+P7AEYHD21qRK7mgnjbrpSL1ATj2VKOz8yRm5JpdasyJ1KikTPN9utiZPfasX97A/qgqssNahoUjXFDyvrsoKaBCWrA8NfrPXWSa5SXBE1wBIZgwLI8K/Eyw3L8L82n4xaSBlbVpwIR0AdxXeYOAkNSt6gPrj+wimZI/EDVFEU0pMGIY0S9E5U/AS1xjhoC8woMGZGTBwNOYPiH/s/CVlVOlCRDZWhdYYyRYXDvYMs/D1vWaHEgDySBp1mVkXn5Hd2s+POwJUVX6QEjcxorjyRD0OW3sXnh52EzyoDjeE0UZVERDJbR1HewxYff+qBAJ/LUIbq8Zpk+iHHdEL9oq6yE0Uv7eNmEm03ZFsQ7Fxute0E1GL5aRoTgImk6NW0B680WH5DWcQfDGGYN+reUUI2iF/7P40Ero67C2dBWHE9bg457F+g7P4bS4HtLsusxhhUEnuUHEjNgOFnoTnYbfVDALhh4/PLX49e/H7/+/vjlz8cvf3QGPVPvkCJEIM4aMASau6Ry2xoZk3y9cyzTVJJE0RIFfJP60pyeyr8+0xQKzMXg6PYS3qF9u+KZ5eioTu7oixHlHN5ZQar1lovk5gdBwBBw68PyBIm8h+uENhcrRdtLQZrsVg5NZYpTEtUvA0qRPbZHOWvtLN1qxTKj7/FZNVra80klHowNFy5sZbbNlIs38mXcdbI+iNABb9BrsF7hkOWEWPU+i2OnTPW1PcLBzGA1Y7E87V2rZfO66U0Fj53yIU1d8stkPjbDasUr57sl7VI2zR8YrJUhNWEpe+WN/Je2eW3b2fO4xM8tDV8/Y4yu0+f5Nt691CfiXe7RD/1XMZ7n2X/MBBVKxGWzRRo1OlXOl7ORtkeRf9ooXkCc03jdWuV5tFYOKR2Ch64IqgySuKxzMAS42pYFAn1Ql22Xy1YRl29gaaplqbdPwjPYEOVbffyg5Gj56ZRbl9UYNtvOA5cJt3GX7GelqjwCyUu5AeX6YAk8/AOZuG848wkAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

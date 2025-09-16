
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01nNDlYd2dveDhQUUx3Z0FMdlFFdmY2UW1mRVdjaXp5aUtiQ1hJY24yND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU95eXc1MnJlbDI0ckRLV1djcW5QeWRZWFRpUzduYjRvSDB6amhyN2V3cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTjdTaTlGajIwQzhENXBnQzlDMGlpeDZUa0p3Ui8vNCtJR040cHp6ODBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQ1d6RlRiWmZkcGpkVWJRUi9aejZvQ215Uk95aUZiVmYvZGlQZmE0VjEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNY1ZpOWN6VHY0NVB5d2Y2b2dncU45NVlqR1V0R0JXQlEzQkRHZVBzSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIrMjJ0T2xXbFBId2o2M2VXb2N1UnUvbFUyME1yaFlFY0Z0Y2xRbi9LRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZnZFVaS1ZNSzBhOEJhRWd3cmp3TXZ4NmN2djN2TkQzZ0QrUXV4USttcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1RUSW5JTVAwc05UTStwanpVcXYyRFdNKzVPb05mVzZnZlpqNFptc3FYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDWlBtWjlzVUs4Q2xHRHJ0QjBqMjJKaUhDbENRTFRwSnJUd20wWWRqNzhXbEVNN3dhM2dmaHZ1TmVDRkFnTjBLQlI2SjhIYldFUHZNYmlpdFBlcmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6InZIOHhKeEdvUUZ1Q3NiZ1B3ZXJjQ3JyNHp5QmtsVjNQdzZLNkNlK3lub1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjU3MDYwMDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVDMTNCRkEwOTI2RDc3NDBFOURGMjIyNzI1NUQxQzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODAzMjg4OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjU3MDYwMDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUyMjA0N0UzQ0E4OTZBOTAwNzVEMkUzMjgyRkUzQ0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODAzMjg4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUVMwemFlenhSdWlxal9nbG5QNFdMdyIsInBob25lSWQiOiJhNjBkNmRmMy04MzBlLTRkZTMtYjc1MS03OWRkZDM5YWNkMGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3NiVklYanFXN3Qwa216WXg2dTBTZ0VVaTJBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1rck5yR0R4d1JwU05STjFDUFdlY2ZIVXRMRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUk1BTFZJTiIsIm1lIjp7ImlkIjoiOTQ3MjU3MDYwMDc6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGl1bWFqYSIsImxpZCI6IjE5MDc5MTc0MTg5NDg4ODoyMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2TjVJUUZFT2pucGNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFzNUNRMWJIS0lYSXFMeU9WY0FidmZQd1A1MFh6cDFaS0RFaktEOHlJSDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1zREU2S2VtdzVqTjdieVp2UDZ6K0MrTFBwaU0yd1VnanJjOC8zV3poTEs0cm41eTk1b1YySzE1MEhjSWlUdEJzOXZpRTdHaVVzQnhRTWpkU01ObkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2WmRRd1FkdmNzek1jdUNsSmNlazdIZDBkUW1iS3dJeHhlMVVIRkcyQ2lzMGQyamMyYTdJZ2xyWDAvZ0UyVXB5MjZBV1Y0cENySzhtYTRPaHJYc2tnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI1NzA2MDA3OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVMT1FrTld4eWlGeUtpOGpsWEFHNzN6OEQrZEY4NmRXU2d4SXlnL01pQisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODAzMjg4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPakMifQ==",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KILLER-MD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "94725706007",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "KILLER MD",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};

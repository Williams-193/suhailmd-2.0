const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="mightytechcompanylimited@gmail.com"
global.location="Osun, Nigeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09152511080";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_43_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibTV1WEIzUWZ1RjhEWmRzaUVrMm82QzJieFhrS1gwWlJ2Ym1RcnljOWd2Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWjZkdXdxMFNRLXU3LVhZcUtWcWtXUVwiLFxuICBcInBob25lSWRcIjogXCJjZjBkMGU0NS1jZWM2LTRkNmMtODU1ZC03ZTJjODU0Y2JlM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxNTEsXG4gICAgICAxMDEsXG4gICAgICAxNTYsXG4gICAgICAyMjUsXG4gICAgICAxNzcsXG4gICAgICA3NyxcbiAgICAgIDE4OSxcbiAgICAgIDIyMCxcbiAgICAgIDE2NyxcbiAgICAgIDEsXG4gICAgICAyMDAsXG4gICAgICAyNTIsXG4gICAgICAyMDksXG4gICAgICAyMDIsXG4gICAgICAzNCxcbiAgICAgIDcxLFxuICAgICAgMjE2LFxuICAgICAgMTk2LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA4NCxcbiAgICAgIDIzMSxcbiAgICAgIDEyLFxuICAgICAgMzcsXG4gICAgICAxOTQsXG4gICAgICA4MCxcbiAgICAgIDE3MixcbiAgICAgIDE0MixcbiAgICAgIDcyLFxuICAgICAgMjA2LFxuICAgICAgMTM5LFxuICAgICAgMjcsXG4gICAgICAxOTAsXG4gICAgICA4NSxcbiAgICAgIDEyMixcbiAgICAgIDU4LFxuICAgICAgNCxcbiAgICAgIDIyNSxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVEMkpNUUxDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTUyNTExMDgwOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWlnaHR5IFRlY2ggQ29tcGFueSBMaW1pdGVkXCIsXG4gICAgXCJsaWRcIjogXCIxNjI4MDU1MzM2NTUwNTg6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBHangwUTVNamV1UVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlNnpSR1Q4SFdXclFwZVNJdS82OXQrdUZyRThlVGk2SE1BY1BFQUJnYkZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhlZHNGYnl6QWdnTTZvQlAwOGttRUNld2huSmFkTUlWakxMNUo5NEg1cWpxbVJTU0pvOE1PaXUwZThrVkJiREJscG9ZbC96OGFWSWlxZzNqYmFITEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlGZzRtczlaV0UzRkloektJSGRuOHZybGRHZ0NDaUt4OHYyb055STZ1bUc2SW03cEpMS1ZsUVdoWHBxaUFsT3o2Z2lISytEZzN3cC93b3NGMU1RTWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTI1MTEwODA6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2OTk4Mjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "mighty tech",
  packname: process.env.PACK_NAME || "mighty tech",
  botname : process.env.BOT_NAME  || "Mighty tech",
  ownername:process.env.OWNER_NAME|| "mighty tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

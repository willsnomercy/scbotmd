//ᴋᴀʟᴏ ᴍᴀᴜ ᴡᴏʀᴋ ᴘᴀᴋᴇ ᴀᴘɪᴋᴇʏ sᴇɴᴅɪʀɪ
//ᴊᴀɴɢᴀɴ ᴅɪ ᴊᴜᴀʟ ᴀᴛᴜʜ sᴄɴʏᴀ 🤣
//sᴄʀɪᴘᴛ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴜs ᴜᴘᴅᴀᴛᴇ
//ᴛʜᴀɴᴋs ᴛᴏ ɢᴜʀᴜ ᴀɴᴅ ʀᴇʏᴢ
//ᴄʀᴇᴅɪᴛ ᴊᴀɴɢᴀɴ ᴅɪ ʜᴀᴘᴜs ʙᴏʟᴇʜ ᴛᴀᴍʙᴀʜɪɴ
//ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ ᴋᴏɴᴛᴀᴋ ᴍᴇ 6283181666350
//ʏᴏᴜᴛᴜʙᴇ @Litzz445 ɪɢ@reymwmwk112

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['6283823911619', 'WillsNotForYou', true],
  ['6283863668404', 'WillsNotForYou', true], 
  [''] 
] //Number of owners

//FITUR LANGKA BISA PAIRING BISA SCAN CUY🤓

global.pairingNumber = "6283863668404"//pairing code isi pake nomor lu

//paring kode

global.mods = ['6283863668404','6283823911619'] 
global.prems = ['6283863668404', '6283823911619']
global.allowed = ['6283863668404', '6283823911619']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['haikalgans']//lolhuman
global.lann = 'p8ADYJib'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': 'haikalgans',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'p8ADYJib'
}

// Sticker WM
global.botname = 'XyBotz - MD'
global.premium = 'true'
global.packname = 'XyBotz - MD' 
global.author = '@willsnotforyou' 
global.menuvid = 'https://telegra.ph/file/4c432a47576b3bd01cb79.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/willsnotforyou\n' 
global.dygp = 'https://chat.whatsapp.com/Fj5EwAasPIfCwwFPauqzp9'
global.fgsc = 'https://wa.me/6283823911619'
global.fgyt = 'https://youtube.com/@willsoffc'
global.fgpyp = 'https://youtube.com/@willsoffc'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'//global loading 🗿👍
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // ᴍᴀx ᴡᴀʀɴ

//jangan di ubah yang bawah ini
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

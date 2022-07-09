const config = require('../config');
const prefix = '.'
const { tiktokdlv3  }  = require("@bochilteam/scraper");
const tiktok = require('../lib/tiktok')
const Language = require('../language');
const Lang = Language.getString('yt');

async function tik( conn , mek , q  ) {
 const from = mek.key.remoteJid
 if (config.WORKTYPE == 'private'){
   
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  if (!q) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   if (!q.includes('tiktok')) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   try {
     const det = await tiktokdlv3(q)
     const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥TIKTOK DOWNLODER*\n\n│🎪 ᴄᴀᴘᴛɪᴏɴ: ' + det.description + '\n\n│👨‍💻 ᴜᴘʟᴏᴀᴅᴇʀ  : ' + det.author.nickname + '\n\n└───────────◉'
     const buttons = [
{buttonId: prefix +'wtik ' + q, buttonText: {displayText: 'WITH WATERMARK'}, type: 1},
{buttonId: prefix +'nwtik ' + q, buttonText: {displayText: 'WITHOUT WATERMARK'}, type: 1},
]
  await conn.sendMessage(from, { image: {url: det.author.avatar  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )   
  }
   catch(e) {
   return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
   }
   
 } else if(config.WORKTYPE == 'public'){
    if (!q) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   if (!q.includes('tiktok')) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   try {
     const det = await tiktokdlv3(q)
     const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥TIKTOK DOWNLODER*\n\n│🎪 ᴄᴀᴘᴛɪᴏɴ: ' + det.description + '\n\n│👨‍💻 ᴜᴘʟᴏᴀᴅᴇʀ  : ' + det.author.nickname + '\n\n└───────────◉'
     const buttons = [
{buttonId: prefix +'wtik ' + q, buttonText: {displayText: 'WITH WATERMARK'}, type: 1},
{buttonId: prefix +'nwtik ' + q, buttonText: {displayText: 'WITHOUT WATERMARK'}, type: 1},
]
  await conn.sendMessage(from, { image: {url: det.author.avatar  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )   
  }
   catch(e) {
   return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
   }
 }
  
 }

 async function wtik(conn , mek ,q) {
  const from = mek.key.remoteJid
  if (config.WORKTYPE == 'private'){
   
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  if (!q) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   if (!q.includes('tiktok')) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   try{
    const vid = await tiktok(q) 
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    await conn.sendMessage(from ,{ video: { url : vid.wm }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    } catch(e) {
    return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
    }
  }else if(config.WORKTYPE == 'public'){
    if (!q) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   if (!q.includes('tiktok')) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
    try{
    const vid = await tiktok(q) 
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    await conn.sendMessage(from ,{ video: { url : vid.wm }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    } catch(e) {
    return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
    }
  }
   
   
 }
  
 async function nwtik(conn , mek ,q) {
  const from = mek.key.remoteJid
  if (config.WORKTYPE == 'private'){
   
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  if (!q) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   if (!q.includes('tiktok')) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   try{
    const vid = await tiktok(q) 
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    await conn.sendMessage(from ,{ video: { url : vid.nowm }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    } catch(e) {
    return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
    }
  }else if(config.WORKTYPE == 'public'){
    if (!q) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
   if (!q.includes('tiktok')) return await conn.sendMessage(from , { text: Lang.N_TIK }, { quoted: mek } )
    try{
    const vid = await tiktok(q) 
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    await conn.sendMessage(from ,{ video: { url : vid.nowm }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    } catch(e) {
    return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
    }
  }
   
   
 }
  
module.exports = { tik , wtik , nwtik }

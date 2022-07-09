const config = require('../config');
const prefix = '.'
const { fbdl , fb2 }  = require('../lib/facebook');
const Language = require('../language');
const Lang = Language.getString('yt');
const { savefrom  }  = require("@bochilteam/scraper");

async function fb(conn , mek , q ) {
  
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
    if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: mek.key } } ) 
    if (!q) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
    const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
    if (!isfb) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
    const url = q.replace("m.facebook" , "facebook")
  try {
  const det = await fbdl(url)
      const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  📥FACEBOOK DOWNLODER\n\n│🎪ᴛɪᴛʟᴇ: ' + det.title + '\n\n│⏳ᴅᴜʀᴀᴛɪᴏɴ : ' + det.duration + '\n\n└───────────◉'
      const buttons = [
{buttonId: prefix +'sdfb ' + q, buttonText: {displayText: 'SD QUALITY'}, type: 1},
{buttonId: prefix +'hdfb ' + q, buttonText: {displayText: 'HD QUALITY'}, type: 1},
]
 await conn.sendMessage(from, { image: {url: det.thumbnail  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )
  
  } catch(e) {
  try {
  const det3 = await savefrom(url)
         const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  📥FACEBOOK DOWNLODER\n\n│🎪ᴛɪᴛʟᴇ: ' + det3.meta.title + '\n\n│⏳ᴅᴜʀᴀᴛɪᴏɴ : ' + det3.meta.duration + '\n\n└───────────◉'
      const buttons = [
{buttonId: prefix +'sdfb ' + q, buttonText: {displayText: 'SD QUALITY'}, type: 1},
{buttonId: prefix +'hdfb ' + q, buttonText: {displayText: 'HD QUALITY'}, type: 1},]
  if ( det3.thumb == '') {  await conn.sendMessage(from, {  text: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } ) } else {
      await conn.sendMessage(from, { image: {url: det3.thumb  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )} 
  
  }
  catch(e) {
  
  try {
  const det2 = await fb2(url)
     if ( det2.thumbnail  == '') { 
         const errms =  await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } ) 
         if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: errms.key } } )  }
       const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  📥FACEBOOK DOWNLODER\n\n│🎪ᴛɪᴛʟᴇ: ' + det2.title + '\n\n│📡ᴜᴘʟᴏᴀᴅᴇʀ  : ' + det2.author + '\n\n└───────────◉'
        const buttons = [
{buttonId: prefix +'sdfb ' + q, buttonText: {displayText: '🔮 SD QUALITY 🔮'}, type: 1},
{buttonId: prefix +'hdfb ' + q, buttonText: {displayText: '🔮 HD QUALITY 🔮'}, type: 1},]
      await conn.sendMessage(from, { image: {url: det2.thumbnail  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )
  } catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
}}}
}
 if (config.WORKTYPE == 'public'){ 
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: mek.key } } ) 
    if (!q) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
    const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
    if (!isfb) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
    const url = q.replace("m.facebook" , "facebook")
  try {
  const det = await fbdl(url)
      const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  📥FACEBOOK DOWNLODER\n\n│🎪ᴛɪᴛʟᴇ: ' + det.title + '\n\n│⏳ᴅᴜʀᴀᴛɪᴏɴ : ' + det.duration + '\n\n└───────────◉'
      const buttons = [
{buttonId: prefix +'sdfb ' + q, buttonText: {displayText: 'SD QUALITY'}, type: 1},
{buttonId: prefix +'hdfb ' + q, buttonText: {displayText: 'HD QUALITY'}, type: 1},
]
 await conn.sendMessage(from, { image: {url: det.thumbnail  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )
  
  } catch(e) {
  try {
  const det3 = await savefrom(url)
         const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  📥FACEBOOK DOWNLODER\n\n│🎪ᴛɪᴛʟᴇ: ' + det3.meta.title + '\n\n│⏳ᴅᴜʀᴀᴛɪᴏɴ : ' + det3.meta.duration + '\n\n└───────────◉'
      const buttons = [
{buttonId: prefix +'sdfb ' + q, buttonText: {displayText: 'SD QUALITY'}, type: 1},
{buttonId: prefix +'hdfb ' + q, buttonText: {displayText: 'HD QUALITY'}, type: 1},]
  if ( det3.thumb == '') {  await conn.sendMessage(from, {  text: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } ) } else {
      await conn.sendMessage(from, { image: {url: det3.thumb  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )} 
  
  }
  catch(e) {
  
  try {
  const det2 = await fb2(url)
     if ( det2.thumbnail  == '') { 
         const errms =  await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } ) 
         if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: errms.key } } )  }
       const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  📥FACEBOOK DOWNLODER\n\n│🎪ᴛɪᴛʟᴇ: ' + det2.title + '\n\n│📡ᴜᴘʟᴏᴀᴅᴇʀ  : ' + det2.author + '\n\n└───────────◉'
        const buttons = [
{buttonId: prefix +'sdfb ' + q, buttonText: {displayText: '🔮 SD QUALITY 🔮'}, type: 1},
{buttonId: prefix +'hdfb ' + q, buttonText: {displayText: '🔮 HD QUALITY 🔮'}, type: 1},]
      await conn.sendMessage(from, { image: {url: det2.thumbnail  }, caption: msg , footer: config.FOOTER , buttons: buttons , headerType: 4} , { quoted: mek } )
  } catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
}}}
 
 }
}


async function sdfb(conn , mek , q){
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
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: mek.key } } ) 
  if (!q) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
  if (!isfb) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const url = q.replace("m.facebook" , "facebook")
  try {
        const det = await fbdl(url)
        const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
        await conn.sendMessage(from, { delete: docsongdown.key })
        const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
       const fbvid =  await conn.sendMessage(from ,{ video: { url : det.medias[0].url }, caption: config.CAPTION } , { quoted: mek })
        await conn.sendMessage(from, { delete: docsongup.key })
        if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 

  
  } catch(e) {
  try {
  const det3 = await savefrom(url)
  const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: docsongdown.key })
  const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
  const fbvid =  await conn.sendMessage(from ,{ video: { url : det3.url[1].url }, caption: config.CAPTION } , { quoted: mek })
  await conn.sendMessage(from, { delete: docsongup.key })
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
  }
  catch(e) {
  
  try {
  const det2 = await fb2(url)
     if ( det2.SD_URL  == '') { 
        const errms =  await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } ) 
        if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: errms.key } } ) 
     }
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    const fbvid = await conn.sendMessage(from ,{ video: { url : det2.SD_URL }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
    
  } catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
}}}
}
  if (config.WORKTYPE == 'public'){  
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: mek.key } } ) 
  if (!q) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
  if (!isfb) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const url = q.replace("m.facebook" , "facebook")
  try {
        const det = await fbdl(url)
        const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
        await conn.sendMessage(from, { delete: docsongdown.key })
        const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
       const fbvid =  await conn.sendMessage(from ,{ video: { url : det.medias[0].url }, caption: config.CAPTION } , { quoted: mek })
        await conn.sendMessage(from, { delete: docsongup.key })
        if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 

  
  } catch(e) {
  try {
  const det3 = await savefrom(url)
  const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: docsongdown.key })
  const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
  const fbvid =  await conn.sendMessage(from ,{ video: { url : det3.url[1].url }, caption: config.CAPTION } , { quoted: mek })
  await conn.sendMessage(from, { delete: docsongup.key })
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
  }
  catch(e) {
  
  try {
  const det2 = await fb2(url)
     if ( det2.SD_URL  == '') { 
        const errms =  await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } ) 
        if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: errms.key } } ) 
     }
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    const fbvid = await conn.sendMessage(from ,{ video: { url : det2.SD_URL }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
    
  } catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
}}}
  }
}

async function hdfb(conn , mek , q){
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
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: mek.key } } ) 
  if (!q) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
  if (!isfb) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const url = q.replace("m.facebook" , "facebook")
  try {
        const det = await fbdl(url)
        const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
        await conn.sendMessage(from, { delete: docsongdown.key })
        const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
       const fbvid =  await conn.sendMessage(from ,{ video: { url : det.medias[1].url }, caption: config.CAPTION } , { quoted: mek })
        await conn.sendMessage(from, { delete: docsongup.key })
        if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 

  
  } catch(e) {
  try {
  const det3 = await savefrom(url)
  const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: docsongdown.key })
  const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
  const fbvid =  await conn.sendMessage(from ,{ video: { url : det3.url[0].url }, caption: config.CAPTION } , { quoted: mek })
  await conn.sendMessage(from, { delete: docsongup.key })
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
  }
  catch(e) {
  
  try {
  const det2 = await fb2(url)
     if ( det2.SD_URL  == '') { 
        const errms =  await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } ) 
        if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: errms.key } } ) 
     }
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    const fbvid = await conn.sendMessage(from ,{ video: { url : det2.HD_URL }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
    
  } catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
}}}
}
  if (config.WORKTYPE == 'public'){  
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: mek.key } } ) 
  if (!q) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
  if (!isfb) return await conn.sendMessage(from , { text: Lang.N_FB }, { quoted: mek } )
  const url = q.replace("m.facebook" , "facebook")
  try {
        const det = await fbdl(url)
        const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
        await conn.sendMessage(from, { delete: docsongdown.key })
        const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
       const fbvid =  await conn.sendMessage(from ,{ video: { url : det.medias[1].url }, caption: config.CAPTION } , { quoted: mek })
        await conn.sendMessage(from, { delete: docsongup.key })
        if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 

  
  } catch(e) {
  try {
  const det3 = await savefrom(url)
  const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: docsongdown.key })
  const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
  const fbvid =  await conn.sendMessage(from ,{ video: { url : det3.url[0].url }, caption: config.CAPTION } , { quoted: mek })
  await conn.sendMessage(from, { delete: docsongup.key })
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
  }
  catch(e) {
  
  try {
  const det2 = await fb2(url)
     if ( det2.SD_URL  == '') { 
        const errms =  await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } ) 
        if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: errms.key } } ) 
     }
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    const fbvid = await conn.sendMessage(from ,{ video: { url : det2.HD_URL }, caption: config.CAPTION } , { quoted: mek })
    await conn.sendMessage(from, { delete: docsongup.key })
    if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💎", key: fbvid.key } } ) 
    
  } catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
}}}
  }
}


module.exports = { fb , sdfb ,hdfb }

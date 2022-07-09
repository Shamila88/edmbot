const config = require('../config');
const prefix = '.'
const insta  = require('../lib/ig');
const Language = require('../language');
const Lang = Language.getString('yt');


async function ig(conn , mek , q) {
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
    if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🎀", key: mek.key } } ) 
     if (!q) return await conn.sendMessage(from , { text: Lang.N_IG }, { quoted: mek } )
     if (!q.includes('instagram.com')) return await conn.sendMessage(from , { text: Lang.N_IG }, { quoted: mek } )
    try{
   
    const response = await insta(q)
    if (response.type == 'image') {
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
   const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥INSTAGRAM DOWNLODER*\n\n│❤️ʟɪᴋᴇs: ' + response.likes +  '\n\n│💬 ᴄᴏᴍᴍᴇɴᴛs: '+ response.comments + '\n\n│ 📤ᴜᴘʟᴏᴀᴅᴇʀ: ' + response.username +'\n\n│📂 ᴛʏᴘᴇ: '+ response.type + '\n\n└───────────◉'
    const img = await conn.sendMessage(from, { image: {url: response.url  }, caption: msg } , { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongup.key })
     if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🎀", key: img.key } } ) 
      
    }
    else if (response.type == 'video') {
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥INSTAGRAM DOWNLODER*\n\n│❤️ʟɪᴋᴇs: ' + response.likes +  '\n\n│💬 ᴄᴏᴍᴍᴇɴᴛs: '+ response.comments + '\n\n│ 📤ᴜᴘʟᴏᴀᴅᴇʀ: ' + response.username +'\n\n│📂 ᴛʏᴘᴇ: '+ response.type + '\n\n└───────────◉'
    const img = await conn.sendMessage(from, { video: {url: response.url  }, caption: msg } , { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongup.key })
     if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🎀", key: img.key } } ) 
    
    }
    
    }
    catch (e) {
    const nfv = await conn.sendMessage(from , { text: Lang.N_FOUND}, { quoted: mek } )
    if(config.AUTO_REACT) return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
    }
  }else if(config.WORKTYPE == 'public'){
  if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🎀", key: mek.key } } )
    if (!q) return await conn.sendMessage(from , { text: Lang.N_IG }, { quoted: mek } )
    if (!q.includes('instagram.com')) return await conn.sendMessage(from , { text: Lang.N_IG }, { quoted: mek } )
  try{
  
  const response = await insta(q)
    if (response.type == 'image') {
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
   const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥INSTAGRAM DOWNLODER*\n\n│❤️ʟɪᴋᴇs: ' + response.likes +  '\n\n│💬 ᴄᴏᴍᴍᴇɴᴛs: '+ response.comments + '\n\n│ 📤ᴜᴘʟᴏᴀᴅᴇʀ: ' + response.username +'\n\n│📂 ᴛʏᴘᴇ: '+ response.type + '\n\n└───────────◉'
    const img = await conn.sendMessage(from, { image: {url: response.url  }, caption: msg } , { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongup.key })
     if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🎀", key: img.key } } ) 
      
    }
    else if (response.type == 'video') {
    const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongdown.key })
    const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
    const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥INSTAGRAM DOWNLODER*\n\n│❤️ʟɪᴋᴇs: ' + response.likes +  '\n\n│💬 ᴄᴏᴍᴍᴇɴᴛs: '+ response.comments + '\n\n│ 📤ᴜᴘʟᴏᴀᴅᴇʀ: ' + response.username +'\n\n│📂 ᴛʏᴘᴇ: '+ response.type + '\n\n└───────────◉'
    const img = await conn.sendMessage(from, { video: {url: response.url  }, caption: msg } , { quoted: mek } )
    await conn.sendMessage(from, { delete: docsongup.key })
     if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🎀", key: img.key } } ) 
    }
  
  }
  catch(e) {
  const nfv = await conn.sendMessage(from , { text: Lang.N_FOUND}, { quoted: mek } )
  if(config.AUTO_REACT) return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
  
  }
  
  
  }
}


module.exports = ig;

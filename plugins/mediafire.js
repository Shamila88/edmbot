const config = require('../config');
const prefix = '.'
const Language = require('../language');
const Lang = Language.getString('yt');
const { mediafiredl  }  = require("@bochilteam/scraper");
var mx = ''
 if (config.LANG == 'EN') mx = '🧜‍♀️💬Max size reached'
 if (config.LANG == 'SI') mx = '🧜‍♀️💬උපරිම සීමාව ඉක්මවා ගොස් ඇත.'
async function mfire(conn , mek ,q ) {
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
    if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🗃️", key: mek.key } } ) 
   if (!q) return await conn.sendMessage(from , { text: Lang.N_MF }, { quoted: mek } )
   if (!q.includes('mediafire.com/file')) return await conn.sendMessage(from , { text: Lang.N_MF }, { quoted: mek } )
  try {
  const file = await mediafiredl(q) 
  if ( file.filesize > 150000) return await conn.sendMessage(from , { text: mx }, { quoted: mek } )
  const fileup = await conn.sendMessage(from , { text: config.FILE_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: fileup.key })
  const filedown = await conn.sendMessage(from , { text: config.FILE_UP }, { quoted: mek } )
  const doc = await conn.sendMessage(from , { document : { url : file.url  } , mimetype : file.ext , fileName : file.filename } , { quoted: mek })
  await conn.sendMessage(from, { delete: filedown.key })
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🗃️", key: doc.key } } )   
  
  } catch(e) {
  const nff = await conn.sendMessage(from , { text: Lang.N_FOUND }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nff.key } } ) 
  }
  

}
  if(config.WORKTYPE == 'public') {
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🗃️", key: mek.key } } ) 
   if (!q) return await conn.sendMessage(from , { text: Lang.N_MF }, { quoted: mek } )
   if (!q.includes('mediafire.com/file')) return await conn.sendMessage(from , { text: Lang.N_MF }, { quoted: mek } )
  try {
  const file = await mediafiredl(q)
  if ( file.filesize > 150000) return await conn.sendMessage(from , { text: mx }, { quoted: mek } )
  const fileup = await conn.sendMessage(from , { text: config.FILE_DOWN }, { quoted: mek } )
  await conn.sendMessage(from, { delete: fileup.key })
  const filedown = await conn.sendMessage(from , { text: config.FILE_UP }, { quoted: mek } )
  const doc = await conn.sendMessage(from , { document : { url : file.url  } , mimetype : file.ext , fileName : file.filename } , { quoted: mek })
  await conn.sendMessage(from, { delete: filedown.key })
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🗃️", key: doc.key } } )   
  
  } catch(e) {
  const nff = await conn.sendMessage(from , { text: Lang.N_FOUND }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') return await conn.sendMessage(from, { react: {  text: "☹️", key: nff.key } } ) 
  }
  
  
  }

}

module.exports = mfire

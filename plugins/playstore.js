const config = require('../config');
const prefix = '.'
const apk_dl  = require('../lib/playstore');
const Language = require('../language');
const Lang = Language.getString('apk');
async function apk(conn , mek , q) {
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
  if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } ) 
  if (!q) return await conn.sendMessage(from , { text: Lang.N_LINK }, { quoted: mek } )
  if (!q.includes('https://play.google.com/store/apps/details?id=')) return await conn.sendMessage(from , { text: Lang.N_LINK }, { quoted: mek } )
   try {
    const app = await apk_dl(q)
    const doc = await conn.sendMessage(from, { document: {url: 'https://apk-dl2.herokuapp.com/api/apk-dl?url='  + q }, mimetype : 'application/vnd.android.package-archive' , fileNme : app.app_name + '.apk'  } )
   }
   catch(e) {
   const nfv = await conn.sendMessage(from , { text: Lang.ERROR }, { quoted: mek } )
   if(config.AUTO_REACT) return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
   }
 
 }
 if(config.WORKTYPE == 'public'){ 
 if(config.AUTO_REACT) await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } ) 
 if (!q) return await conn.sendMessage(from , { text: Lang.N_LINK }, { quoted: mek } )
  if (!q.includes('https://play.google.com/store/apps/details?id=')) return await conn.sendMessage(from , { text: Lang.N_LINK }, { quoted: mek } )        
    try {
    
    const doc = await conn.sendMessage(from, { document: {url:'https://apk-dl.herokuapp.com/api/apk-dl?url='  + q  }, mimetype : 'application/vnd.android.package-archive' , fileName: 'app.apk'  } ,
                                       { quoted: mek } )}
   catch(e) {
   const nfv = await conn.sendMessage(from , { text: Lang.ERROR + '\n\n\n' + e }, { quoted: mek } )
   if(config.AUTO_REACT) return await conn.sendMessage(from, { react: {  text: "☹️", key: nfv.key } } ) 
   }

         } 

}
module.exports = apk

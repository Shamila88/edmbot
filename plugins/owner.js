const config = require('../config');
const prefix = '.'
async function own(conn , mek ) {
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
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "👨‍💻", key: mek.key } } )  
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + `FN:` + config.OWN_NAME + `\n` // full name
            + 'TEL;type=CELL;type=VOICE;waid=' + config.OWN_NUMBER + ':+' + config.OWN_NUMBER + '\n' // WhatsApp ID + phone number
            + 'END:VCARD'
 await conn.sendMessage(from,{ contacts: { displayName: config.OWN_NAME , contacts: [{ vcard }]  }} , { quoted: mek })
    
  }
  if (config.WORKTYPE == 'public'){ 
      if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "👨‍💻", key: mek.key } } )
     const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + `FN:` + config.OWN_NAME + `\n` // full name
            + 'TEL;type=CELL;type=VOICE;waid=' + config.OWN_NUMBER + ':+' + config.OWN_NUMBER + '\n' // WhatsApp ID + phone number
            + 'END:VCARD'
 await conn.sendMessage(from,{ contacts: { displayName: config.OWN_NAME , contacts: [{ vcard }]  }} , { quoted: mek })
  }
  
  
}
module.exports = own ;

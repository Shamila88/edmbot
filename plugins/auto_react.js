const config = require('../config');
const {
	default: makeWASocket,
	useSingleFileAuthState,
	DisconnectReason,
	getContentType ,
	jidDecode
} = require('@adiwajshing/baileys')

async function react_auto(conn , mek , body ) {
  mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
  const type = getContentType(mek.message)
  const from =  mek.key.remoteJid
  if(config.WORKTYPE == 'private') { 
	  
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  
  if (!isForme ) return
  if ( config.OWN.includes(senderNumber)) await conn.sendMessage(from, { react: {  text: "👑", key: mek.key } } )
  if (issudo) 	 await conn.sendMessage(from, { react: {  text: "🧢", key: mek.key } } ) 
  if (body.includes('😂'))  await conn.sendMessage(from, { react: {  text: "😂", key: mek.key } } )
  if ( '94715343050'.includes(senderNumber))  await conn.sendMessage(from, { react: {  text: "🩲", key: mek.key } } )
  if (type === 'stickerMessage')  await conn.sendMessage(from, { react: {  text: config.STIC_REACT_EMOJI , key: mek.key } } )
  if (body.includes('🧜‍♀️💬'))  await conn.sendMessage(from, { react: {  text: "ℹ️", key: mek.key } } )
	if (body.includes('😜'))  await conn.sendMessage(from, { react: {  text: "🤪", key: mek.key } } )
	if (body.includes('fuck'))  await conn.sendMessage(from, { react: {  text: "🖕", key: mek.key } } )
	if (body == 'hi' )  await conn.sendMessage(from, { react: {  text: "👋", key: mek.key } } )
	if (body.includes('🙂'))  await conn.sendMessage(from, { react: {  text: "🙂", key: mek.key } } )
  if (body.includes('🤧'))  await conn.sendMessage(from, { react: {  text: "🏥", key: mek.key } } )
	if (body.includes('🥰'))  await conn.sendMessage(from, { react: {  text: "💖", key: mek.key } } )
	if (body.includes("😄"))  await conn.sendMessage(from, { react: {  text: "😅", key: mek.key } } )
  if (body.includes("😁"))  await conn.sendMessage(from, { react: {  text: "😉", key: mek.key } } )
  if (body.includes('😆'))  await conn.sendMessage(from, { react: {  text: "😅", key: mek.key } } )
  if (body.includes('🥹'))  await conn.sendMessage(from, { react: {  text: "🥲", key: mek.key } } )
  if (body.includes('🤣'))  await conn.sendMessage(from, { react: {  text: "😂", key: mek.key } } )
  if (body.includes('🥲'))  await conn.sendMessage(from, { react: {  text: "😗", key: mek.key } } )
  if (body.includes('☺️'))  await conn.sendMessage(from, { react: {  text: "😊", key: mek.key } } )
  if (body.includes('😊'))  await conn.sendMessage(from, { react: {  text: "😇", key: mek.key } } )
  if (body.includes('🙃'))  await conn.sendMessage(from, { react: {  text: "😗", key: mek.key } } )
  if (body.includes('😉'))  await conn.sendMessage(from, { react: {  text: "🤭", key: mek.key } } )
  if (body.includes('😍'))  await conn.sendMessage(from, { react: {  text: "❤️", key: mek.key } } )
  if (body.includes('😘'))  await conn.sendMessage(from, { react: {  text: "😙", key: mek.key } } )
  if (body.includes('😀'))  await conn.sendMessage(from, { react: {  text: "😊", key: mek.key } } )
  if (body.includes('😃'))  await conn.sendMessage(from, { react: {  text: "☺️", key: mek.key } } )
  if (body.includes('😗'))  await conn.sendMessage(from, { react: {  text: "😚", key: mek.key } } )	
  if (body.includes('😙'))  await conn.sendMessage(from, { react: {  text: "🤪", key: mek.key } } )
  if (body.includes('😚'))  await conn.sendMessage(from, { react: {  text: "😘", key: mek.key } } )
  if (body.includes('😋'))  await conn.sendMessage(from, { react: {  text: "🤨", key: mek.key } } )
  if (body.includes('😛'))  await conn.sendMessage(from, { react: {  text: "😜", key: mek.key } } )
  if (body.includes('😝'))  await conn.sendMessage(from, { react: {  text: "😜", key: mek.key } } )	  
 if (type === 'imageMessage')  await conn.sendMessage(from, { react: {  text: config.IMG_REACT_EMOJI, key: mek.key } } )
if (type === 'videoMessage')  await conn.sendMessage(from, { react: {  text: config.VID_REACT_EMOJI, key: mek.key } } )
	  if (type === 'conversation')  await conn.sendMessage(from, { react: {  text: config.MSG_REACT_EMOJI, key: mek.key } } )
	  if (type === 'extendedTextMessage')  await conn.sendMessage(from, { react: {  text: config.MSG_REACT_EMOJI, key: mek.key } } )
	  
  } 
  if (config.WORKTYPE == 'public') {
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]  
 const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  if ( config.OWN.includes(senderNumber)) await conn.sendMessage(from, { react: {  text: "🎩", key: mek.key } } ) 
 if (issudo) 	 await conn.sendMessage(from, { react: {  text: "🧢", key: mek.key } } ) 	  
  if ( '94715343050'.includes(senderNumber))  await conn.sendMessage(from, { react: {  text: "🩲", key: mek.key } } )
  if (type === 'stickerMessage')  await conn.sendMessage(from, { react: {  text: `${config.STIC_REACT_EMOJI}` , key: mek.key } } )	  
  if (body.includes('🧜‍♀️💬'))  await conn.sendMessage(from, { react: {  text: "ℹ️", key: mek.key } } )	  
  if (body.includes('😂'))  await conn.sendMessage(from, { react: {  text: "😂", key: mek.key } } )
  if (body.includes('😜'))  await conn.sendMessage(from, { react: {  text: "🤪", key: mek.key } } )
  if (body.includes('fuck'))  await conn.sendMessage(from, { react: {  text: "🖕", key: mek.key } } )
  if (body == 'hi' )  await conn.sendMessage(from, { react: {  text: "👋", key: mek.key } } )
  if (body.includes('🙂'))  await conn.sendMessage(from, { react: {  text: "🙂", key: mek.key } } )
  if (body.includes('🤧'))  await conn.sendMessage(from, { react: {  text: "🏥", key: mek.key } } )
  if (body.includes('🥰'))  await conn.sendMessage(from, { react: {  text: "💖", key: mek.key } } )
  if (body.includes("😄"))  await conn.sendMessage(from, { react: {  text: "😅", key: mek.key } } )
  if (body.includes("😁"))  await conn.sendMessage(from, { react: {  text: "😉", key: mek.key } } )
  if (body.includes('😆'))  await conn.sendMessage(from, { react: {  text: "😅", key: mek.key } } )
  if (body.includes('🥹'))  await conn.sendMessage(from, { react: {  text: "🥲", key: mek.key } } )
  if (body.includes('🤣'))  await conn.sendMessage(from, { react: {  text: "😂", key: mek.key } } )
  if (body.includes('🥲'))  await conn.sendMessage(from, { react: {  text: "😗", key: mek.key } } )
  if (body.includes('☺️'))  await conn.sendMessage(from, { react: {  text: "😊", key: mek.key } } )
  if (body.includes('😊'))  await conn.sendMessage(from, { react: {  text: "😇", key: mek.key } } )
  if (body.includes('🙃'))  await conn.sendMessage(from, { react: {  text: "😗", key: mek.key } } )
  if (body.includes('😉'))  await conn.sendMessage(from, { react: {  text: "🤭", key: mek.key } } )
  if (body.includes('😍'))  await conn.sendMessage(from, { react: {  text: "❤️", key: mek.key } } )
  if (body.includes('😘'))  await conn.sendMessage(from, { react: {  text: "😙", key: mek.key } } )
  if (body.includes('😀'))  await conn.sendMessage(from, { react: {  text: "😊", key: mek.key } } )
  if (body.includes('😃'))  await conn.sendMessage(from, { react: {  text: "☺️", key: mek.key } } )
  if (body.includes('😃'))  await conn.sendMessage(from, { react: {  text: "☺️", key: mek.key } } )
  if (body.includes('😗'))  await conn.sendMessage(from, { react: {  text: "😚", key: mek.key } } )	
  if (body.includes('😙'))  await conn.sendMessage(from, { react: {  text: "🤪", key: mek.key } } )
  if (body.includes('😚'))  await conn.sendMessage(from, { react: {  text: "😘", key: mek.key } } )
  if (body.includes('😋'))  await conn.sendMessage(from, { react: {  text: "🤨", key: mek.key } } )
  if (body.includes('😛'))  await conn.sendMessage(from, { react: {  text: "😜", key: mek.key } } )
  if (body.includes('😝'))  await conn.sendMessage(from, { react: {  text: "😜", key: mek.key } } )  
 if (type === 'imageMessage')  await conn.sendMessage(from, { react: {  text: config.IMG_REACT_EMOJI, key: mek.key } } )
if (type === 'videoMessage')  await conn.sendMessage(from, { react: {  text: config.VID_REACT_EMOJI, key: mek.key } } )
	  if (type === 'conversation')  await conn.sendMessage(from, { react: {  text: config.MSG_REACT_EMOJI, key: mek.key } } )
	  if (type === 'extendedTextMessage')  await conn.sendMessage(from, { react: {  text: config.MSG_REACT_EMOJI, key: mek.key } } )	  
  }
  
}

module.exports =  react_auto ;

const config = require('../config');
async function ping(conn , mek) {
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  const from = mek.key.remoteJid
  var start = new Date().getTime();
  await message.sendMessage('```Ping!```');
  var end = new Date().getTime();
   await conn.sendMessage(from , { text: '*Pong!*\n```' + (end - start) + 'ms```' }, { quoted: mek } )
}

module.exports =  ping ;

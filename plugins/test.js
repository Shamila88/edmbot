const events = require("./events");


events.cmd({ name : 'hi' , desc ; 'nothing'}  , ( async (conn , mek , q) => {
  const from = mek.key.remoteJid
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Sin Nombre'
			
			const isMe = botNumber.includes(senderNumber)
  if (!isMe) return
  await conn.sendMessage(from, { text: 'hi hello' }, { quoted: mek }) 
} )
           
           }
           
           
           events.cmd({ name : 'hello' , desc ; 'nothing'}  , ( async (conn , mek , q) => {
  const from = mek.key.remoteJid
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Sin Nombre'
			
			const isMe = botNumber.includes(senderNumber)
  if (!isMe) return
  await conn.sendMessage(from, { text: 'hi hello 2' }, { quoted: mek }) 
} )
           
           }

const config = require('../config');
const prefix = '.'


async function alive(conn , mek) {
  const from = mek.key.remoteJid
  if(config.WORKTYPE == 'private') { 
	  
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "👋", key: mek.key } } )
  var alivemsg = ''
  if (config.ALIVEMSG == 'default') alivemsg = '```👋 Hi! I am online now.```\n\n_🤖 I  am Aqua an user bot for whatsapp._\n\n*🧜‍♀️Have a nice day!🧜‍♀️*'
  if ( config.ALIVEMSG !== 'default') alivemsg = config.ALIVEMSG
  const templateButtons = [
  { urlButton: {displayText: config.URL_1NAME , url: config.URL_1LINK }},
  { urlButton: {displayText: config.URL_2NAME , url: config.URL_2LINK }},
  { quickReplyButton: {displayText: 'MENU', id: prefix +'menu' }} , 
  { quickReplyButton: {displayText: 'OWNER', id: prefix +'owner' }}   
 ]
   const buttonMessage = {
    caption: alivemsg ,
    footer: config.FOOTER,
    templateButtons: templateButtons,
    image: {url: config.ALIVE_LOGO}
}                             
await conn.sendMessage(from, buttonMessage )	  
  }else if (config.WORKTYPE == 'public') {
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "👋", key: mek.key } } )	  
  var alivemsg = ''
  if (config.ALIVEMSG == 'default') alivemsg = '```👋 Hi! I am online now.```\n\n_🤖 I  am Aqua an user bot for whatsapp._\n\n*🧜‍♀️Have a nice day!🧜‍♀️*'
  if (config.ALIVEMSG !== 'default') alivemsg = config.ALIVEMSG
  const templateButtons = [
  {index: 1, urlButton: {displayText: config.URL_1NAME , url: config.URL_1LINK }},
  {index: 2, urlButton: {displayText: config.URL_2NAME , url: config.URL_2LINK }},
  {index: 3, quickReplyButton: {displayText: 'MENU', id: prefix +'menu' }} , 
  {index: 4, quickReplyButton: {displayText: 'OWNER', id: prefix +'owner' }}   
 ]
   const buttonMessage = {
    caption: alivemsg ,
    footer: config.FOOTER,
    templateButtons: templateButtons,
    image: {url: config.ALIVE_LOGO}
}                             
await conn.sendMessage(from, buttonMessage )
  }
}

module.exports =  alive ;


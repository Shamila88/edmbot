const config = require('../config');
const prefix = '.'
const axios = require('axios');
const fs = require('fs');
const got = require("got");
var gis = require('g-i-s');
const Language = require('../language');
const Lang = Language.getString('yt');
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
  }
  
}

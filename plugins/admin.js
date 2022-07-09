
const Language = require('../language');
const Lang = Language.getString('admin');
const Config = require('../config');
const config = require('../config');
const { sms } = require('../lib/message');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep } = require('../lib/functions')

async function kick( conn , mek , q ) {
 if (config.WORKTYPE == 'private') { 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  
  const m = sms(conn , mek )
  if (m.mentionUser[0] === undefined) return await conn.sendMessage(from , { text: Lang.GIVE_ME_USER }, { quoted: mek } )
  if (groupAdmins.includes(m.mentionUser[0])) return conn.sendMessage(from , { text: Lang.USER_IS_ADMIN }, { quoted: mek } )
  const users = m.mentionUser[0]
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  if (Config.BANMSG == 'default') {
    
 const suc  =  await conn.sendMessage(from , { text: '@' + m.mentionUser[0].split('@')[0] + ' , ```' + Lang.BANNED + '```', mentions: [m.mentionUser[0]] }, { quoted: mek } )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "✅", key: suc.key } } ) 
  await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )
} else {
const suc  =  await conn.sendMessage(from , { text: '@' + users.split('@')[0] + ' , ' + Config.BANMSG , mentions: [m.mentionUser[0]]  }, { quoted: mek } )
 await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "✅", key: suc.key } } ) 
}
 
 
 } else if (config.WORKTYPE == 'public') {
 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isGroupAdmins) return await conn.sendMessage(from , { text: Lang.UR_NOT_ADMIN }, { quoted: mek } )
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  
  const m = sms(conn , mek )
  if (m.mentionUser[0] === undefined) return await conn.sendMessage(from , { text: Lang.GIVE_ME_USER }, { quoted: mek } )
  if (groupAdmins.includes(m.mentionUser[0])) return conn.sendMessage(from , { text: Lang.USER_IS_ADMIN }, { quoted: mek } )
  const users = m.mentionUser[0]
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  if (Config.BANMSG == 'default') {
    
 const suc  = await conn.sendMessage(from , { text: '@' + m.mentionUser[0].split('@')[0] + ' , ```' + Lang.BANNED + '```' , mentions: [m.mentionUser[0]] }, { quoted: mek } )
  await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "✅", key: suc.key } } ) 
} else {
const suc  = await conn.sendMessage(from , { text: '@' + users.split('@')[0] + ' , ' + Config.BANMSG , mentions: [m.mentionUser[0]]  }, { quoted: mek } )

 await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "✅", key: suc.key } } ) 

}
 }
}

async function add(conn , mek , q ) {
if (config.WORKTYPE == 'private') { 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isMe ) return
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  if(!q)  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
  if(q.includes('+'))  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  if (Config.ADDMSG == 'default') {
  await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
 const suc  = await conn.sendMessage(from , { text: '@' + q + ' , ```' + Lang.ADDED + '```'}, { quoted: mek } ) 
} else {await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
const suc  = await conn.sendMessage(from , { text: '@' + q + ' , ' + Config.ADDMSG }, { quoted: mek } )
}}
else if (config.WORKTYPE == 'public') { }
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isGroupAdmins) return await conn.sendMessage(from , { text: Lang.UR_NOT_ADMIN }, { quoted: mek } )
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  if(!q)  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
  if(q.includes('+'))  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } ) 
  if (Config.ADDMSG == 'default') {
   await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
const suc  =  await conn.sendMessage(from , { text: '@' + q + ' , ```' + Lang.ADDED + '```'}, { quoted: mek } ) 
} else {
 await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
const suc  = await conn.sendMessage(from , { text: '@' + q + ' , ' + Config.ADDMSG }, { quoted: mek } )
}}


async function promote(conn , mek , q) {
  const from = mek.key.remoteJid
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
 
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  const m = sms(conn , mek )
  if (m.mentionUser[0] === undefined) return await conn.sendMessage(from , { text: Lang.GIVE_ME_USER }, { quoted: mek } )
  if (groupAdmins.includes(m.mentionUser[0])) return conn.sendMessage(from , { text: Lang.IS_ADMIN }, { quoted: mek } )
  const users = m.mentionUser[0]
  if (Config.PROMOTEMSG == 'default') {
  await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"promote" )
  await conn.sendMessage(from , { text: '@' + m.mentionUser[0].split('@')[0] + ' , ```' + Lang.PROMOTE + '```' , mentions: [m.mentionUser[0]] }, { quoted: mek } )
  } 
 else { 
 await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"promote" )  
 await conn.sendMessage(from , { text: '@' + users.split('@')[0] + ' , ' + Config.PROMOTEMSG , mentions: [m.mentionUser[0]] }, { quoted: mek } )
 }
}

async function demote(conn , mek , q) {
  const from = mek.key.remoteJid
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  const m = sms(conn , mek )
  if (m.mentionUser[0] === undefined) return await conn.sendMessage(from , { text: Lang.GIVE_ME_USER }, { quoted: mek } )
  if (!groupAdmins.includes(m.mentionUser[0])) return conn.sendMessage(from , { text: Lang.ISN_ADMIN }, { quoted: mek } )
  const users = m.mentionUser[0]
   if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  if (Config.DEMOTEMSG == 'default') {
  await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"demote" )
  await conn.sendMessage(from , { text: '@' + m.mentionUser[0].split('@')[0] + ' , ```' + Lang.DEMOTE + '```' , mentions: [m.mentionUser[0]] }, { quoted: mek } )
  } 
 else { 
 await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"demote" )  
 await conn.sendMessage(from , { text: '@' + users.split('@')[0] + ' , ' + Config.DEMOTEMSG , mentions: [m.mentionUser[0]] }, { quoted: mek } )
 }
}

async function mute(conn , mek ){
  const from = mek.key.remoteJid
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  if (Config.MUTEMSG == 'default') {
  await conn.groupSettingUpdate(from , 'announcement' )
 const suc =  await conn.sendMessage(from , { text:  Lang.MUTE  }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🔇", key: suc.key } } ) 
  } 
 else { 
await conn.groupSettingUpdate(from , 'announcement' )
 const suc = await conn.sendMessage(from , { text:  Config.MUTEMSG  }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🔇", key: suc.key } } ) 
 }


}

async function unmute(conn , mek ){
  const from = mek.key.remoteJid
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🪄", key: mek.key } } )
  if (Config.UNMUTEMSG == 'default') {
  await conn.groupSettingUpdate(from , 'not_announcement' )
 const suc =  await conn.sendMessage(from , { text:  Lang.UNMUTE  }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🔊", key: suc.key } } ) 
  } 
 else { 
 await conn.groupSettingUpdate(from , 'not_announcement' )
 const suc = await conn.sendMessage(from , { text:  Config.UNMUTEMSG  }, { quoted: mek } )
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "🔊", key: suc.key } } ) 
 }


}





module.exports =  { kick , add , promote , demote , mute , unmute };

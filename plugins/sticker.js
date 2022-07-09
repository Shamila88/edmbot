const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Language = require('../language');
const { exec } = require('child_process')
const Lang = Language.getString('stic');
const Config = require('../config');
const config = require('../config');
const { sms } = require('../lib/message');
const { imageToWebp, videoToWebp, writeExif } = require('../lib/stic')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep } = require('../lib/functions')
const fs = require('fs');
const uploadFile = require('../lib/uploader')
const { webp2mp4 ,  webp2img ,  img2webp , vid2webp } = require('../lib/ezgif')

async function sticker(conn , mek ){
  if (config.WORKTYPE == 'private') {
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
 const from = mek.key.remoteJid	  
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💫", key: mek.key } } )  
 
  const v = sms(conn , mek)
  const isQuotedViewOnce = v.quoted ? (v.quoted.type === 'viewOnceMessage') : false
	const isQuotedImage = v.quoted ? ((v.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'imageMessage') : false)) : false
	const isQuotedVideo = v.quoted ? ((v.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'videoMessage') : false)) : false
  if ((v.type === 'imageMessage') || isQuotedImage) { 
       const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )
	var nameJpg = getRandom('')
	isQuotedImage ? await v.quoted.download(nameJpg) : await v.download(nameJpg)
	var stik = await imageToWebp(nameJpg + '.jpg')
	writeExif(stik, {packname: config.STIC_WM, author: ''})
		.then(x => v.replyS(x))
     await conn.sendMessage(from, { delete: cstic.key })
  }else if ((v.type === 'videoMessage') || isQuotedVideo) {
	const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )  
	var nameMp4 = getRandom('')
	isQuotedVideo ? await v.quoted.download(nameMp4) : await v.download(nameMp4)
         writeExif(stik, {packname: config.STIC_WM , author: ''})
		.then(x => v.replyS(x))
      await conn.sendMessage(from, { delete: cstic.key })
} else {
	v.reply(Lang.NEED)
}
    
  }
	if (config.WORKTYPE == 'public' ) {
  		
  const from = mek.key.remoteJid
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💫", key: mek.key } } )  
  const v = sms(conn , mek)
  const isQuotedViewOnce = v.quoted ? (v.quoted.type === 'viewOnceMessage') : false
	const isQuotedImage = v.quoted ? ((v.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'imageMessage') : false)) : false
	const isQuotedVideo = v.quoted ? ((v.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'videoMessage') : false)) : false
  if ((v.type === 'imageMessage') || isQuotedImage) { 
const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )	  
  var nameJpg = getRandom('')
	isQuotedImage ? await v.quoted.download(nameJpg) : await v.download(nameJpg)
	var stik = await imageToWebp(nameJpg + '.jpg')
	writeExif(stik, {packname: config.STIC_WM , author: ''})
		.then(x => v.replyS(x))
await conn.sendMessage(from, { delete: cstic.key })

  }else if ((v.type === 'videoMessage') || isQuotedVideo) {
	const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )

	var nameMp4 = getRandom('')
	isQuotedVideo ? await v.quoted.download(nameMp4) : await v.download(nameMp4)
	var stik = await videoToWebp(nameMp4 + '.mp4')
	writeExif(stik, {packname: config.STIC_WM , author: ''})
		.then(x => v.replyS(x))
	await conn.sendMessage(from, { delete: cstic.key })
} else {
	v.reply(Lang.NEED)
}

  }
}

async function stic2img(conn ,mek ){
const from = mek.key.remoteJid
const v = sms(conn , mek)
if (config.WORKTYPE == 'private' ) { 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💫", key: mek.key } } ) 	
  const isQuotedSticker = v.quoted ? (v.quoted.type === 'stickerMessage') : false
  if (!isQuotedSticker) return v.reply(Lang.N_STIC)
	const cre = await conn.sendMessage(from , { text: Lang.C_IMG  } , {quoted: mek})
	var nameWebp = getRandom('')
await v.quoted.download(nameWebp)
ffmpeg(`${nameWebp}.webp`)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await conn.sendMessage(from, { image : fs.readFileSync('output.jpg') , caption: config.CAPTION, } , { quoted: mek });
	        await conn.sendMessage(from, { delete: cre.key })
	        await fs.unlinkSync(nameWebp + '.webp')
            });
       
}
if (config.WORKTYPE == 'public'  ) {
 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💫", key: mek.key } } ) 	
 const isQuotedSticker = v.quoted ? (v.quoted.type === 'stickerMessage') : false
  if (!isQuotedSticker) return v.reply(Lang.N_STIC)
	const cre = await conn.sendMessage(from , { text: Lang.C_IMG  } , {quoted: mek})
	var nameWebp = getRandom('')
await v.quoted.download(nameWebp)
ffmpeg(`${nameWebp}.webp`)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await conn.sendMessage(from, { image : fs.readFileSync('output.jpg') , caption: config.CAPTION, } , { quoted: mek });
	        await conn.sendMessage(from, { delete: cre.key })
	        await fs.unlinkSync(nameWebp + '.webp')
            });
}	
	}
async function stic2vid(conn , mek ) {
const from = mek.key.remoteJid
const v = sms(conn , mek)
if (config.WORKTYPE == 'private' ) { 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const issudo = config.SUDO !== false ? config.SUDO.includes(senderNumber) : ''
  const isowner = config.OWN.includes(senderNumber)
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const isForme = isowner? isowner : isMe? isMe : issudo ? issudo : ''
  if (!isForme ) return
  if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💫", key: mek.key } } ) 	
  const isQuotedSticker = v.quoted ? (v.quoted.type === 'stickerMessage') : false
  if (!isQuotedSticker) return v.reply(Lang.N_STIC) 
  const cre = await conn.sendMessage(from , { text: Lang.C_VID  } , {quoted: mek})
  var nameWebp = getRandom('')
  await v.quoted.download(nameWebp)
  const url = await uploadFile(`${nameWebp}.webp`)
  const result = url.result.url
 const vid = await webp2mp4(result)
 const vid2 = await conn.sendMessage(from , { video : {url :  vid} , caption : config.CAPTION } , { quoted: mek } )
  await conn.sendMessage(from, { delete: cre.key })
	await fs.unlinkSync(nameWebp + '.webp')
}
if( config.WORKTYPE == 'public') {
	 if(config.AUTO_REACT == 'true') await conn.sendMessage(from, { react: {  text: "💫", key: mek.key } } ) 	
  const isQuotedSticker = v.quoted ? (v.quoted.type === 'stickerMessage') : false
  if (!isQuotedSticker) return v.reply(Lang.N_STIC) 
  const cre = await conn.sendMessage(from , { text: Lang.C_VID  } , {quoted: mek})
  var nameWebp = getRandom('')
  await v.quoted.download(nameWebp)
  const url = await uploadFile(`${nameWebp}.webp`)
  const result = url.result.url
 const vid = await webp2mp4(result)
 const vid2 = await conn.sendMessage(from , { video : {url :  vid} , caption : config.CAPTION } , { quoted: mek } )
  await conn.sendMessage(from, { delete: cre.key })
	await fs.unlinkSync(nameWebp + '.webp')

}	



}

module.exports =  { sticker , stic2img , stic2vid};

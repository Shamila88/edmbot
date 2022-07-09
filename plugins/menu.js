const config = require('../config');

const prefix = '.'
async function menu( conn , mek ) {
  
   const from = mek.key.remoteJid
   const sections = [
    {
	title: "*🐋Aquabot Command list 🐋*",
	rows: [
    {title: "༺⎝𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂⎠༻", rowId: prefix + "dllist", description: ""} ,
    {title: "༺⎝𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂⎠༻", rowId: ".srclist", description: ""} ,
    {title: "༺⎝𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂⎠༻", rowId: ".conlist", description: ""} ,
    {title: "༺⎝𝙰𝙳𝙼𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂⎠༻", rowId: ".adminlist", description: ""} ,
    {title: "༺⎝𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂⎠༻", rowId: ".otherlist", description: ""} 
    
	]
    },
  
]
const listMessage = {
  footer: config.FOOTER,
  text : '\n👨‍💻Deployed by ' + config.DEPLOYER + '\n' ,
  title: '*🐋🦈AQUA COMMAND LIST🦈🐋*',	
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(from, listMessage)


}

async function dlmenu(conn ,mek ) {
	const from = mek.key.remoteJid
	const head = '◎──────( 🥽AQUABOT🥽 ) \nDOWNLOADER COMMANDS \n ───────────────◉'
	var tit = ''
	if (config.LANG == 'SI') tit = config.C_EMOJI + 'විධානය : '
	if (config.LANG == 'EN') tit = config.C_EMOJI + 'command : '	
	var des = ''
	if (config.LANG == 'SI') des = config.D_EMOJI + 'විස්තරය : '
	if (config.LANG == 'EN') des = config.D_EMOJI + 'description : '	

	var songdes = ''
	if (config.LANG == 'SI')  songdes = 'එය youtube වෙතින් mp3 බාගත කරයි.'
	if (config.LANG == 'EN')  songdes = 'download mp3 from youtube'
	var viddes = ''
	if (config.LANG == 'SI') viddes = 'එය youtube වෙතින් mp4  බාගත කරයි.'
	if (config.LANG == 'EN') viddes = 'download mp4 from youtube'
	var fbdes = ''
	if (config.LANG == 'SI') fbdes = 'එය facebook වෙතින් වීඩියෝ බාගත කරයි'
	if (config.LANG == 'EN') fbdes = 'download videos from facebook'
	var igdes = ''
	if (config.LANG == 'SI') igdes = 'එය instagram වෙතින් video / post බාගත කරයි.'
	if (config.LANG == 'EN') igdes = 'download videos/posts from instagram'
	var tikdes  = ''
	if (config.LANG == 'SI') tikdes = 'එය tiktok වෙතින් වීඩියෝ බාගත කරයි' 
	if (config.LANG == 'EN') tikdes = 'download videos from tiktok'	
		
		
const msg = head + '\n\n' + tit + prefix + 'song\n'  + des + songdes  + '\n\n' +
                            tit + prefix + 'video\n' + des + viddes   + '\n\n' +
                            tit + prefix + 'fb\n'    + des + fbdes    + '\n\n' +
                            tit + prefix + 'ig\n'    + des + igdes    + '\n\n' 
await conn.sendMessage(from, { text : msg })

}

module.exports = { menu  , dlmenu};

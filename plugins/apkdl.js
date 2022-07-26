import cheerio from 'cheerio'
import fetch from 'node-fetch'

  async function apkdl(conn , mek ,q ) {
	if (!args[0]) throw `Ex: ${usedPrefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`
	let res = await apkDl(args[0])
	await m.reply('_In progress, please wait..._')
	conn.sendMessage(from, { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName }, { quoted: mek })
  }

module.exports = apkdl

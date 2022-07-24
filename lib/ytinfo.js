const yts = require( 'yt-search' )


async function ytinfo(name) {

         let arama = await yts(name);
        arama = arama.all;
        if(arama.length < 1) { 
        let result = { status : false} 
        return result 
         } 
        else {
        let thumbnail = arama[0].thumbnail;
        let title = arama[0].title.replace(/ /gi, '+');
        let title2 = arama[0].title
        let views = arama[0].views;
        let author = arama[0].author.name;
        let url = arama[0].url
        let result = { songmsg : '┌───[EDM BOT]\n\n  *📥SONG DOWNLODER*\n\n│sᴏɴɢ: ' + title2 + '\n\n│ ᴠɪᴇᴡs: ' + views + '\n\n│ᴄʜᴀɴɴᴇʟ: ' + author + '\n\n│ᴜʀʟ: ' + url + '\n\n└───────────◉' , 
                       vidmsg : '┌───[EDM BOT]\n\n  *📥VIDEO DOWNLODER*\n\n│ᴠɪᴅᴇᴏ: ' + title2 + '\n\n│ ᴠɪᴇᴡs: ' + views + '\n\n│ᴄʜᴀɴɴᴇʟ: ' + author + '\n\n│ᴜʀʟ: ' + url + '\n\n└───────────◉' ,
                      thumbnail : thumbnail ,
                     yuturl: url }
        return result
 
        }
}
module.exports = ytinfo ;

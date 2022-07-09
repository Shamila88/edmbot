const axios = require('axios');
const sesi2 = "48818879616:000xbnbSqd4hPx:23"

async function insta(urlPost) {
   const furl = urlPost.replace("/?utm_medium=copy_link", "/");
   const surl = furl.replace("/?utm_source=ig_web_copy_link", "/");
   const turl = surl.replace("/?utm_medium=share_sheet", "/");
   const fullurl= turl.replace("reel","p")
   var url3 =''
  if (fullurl.includes('?igshid')) {
      var split = fullurl.split('?igshid');
           url3  = split[0]; } else {
           url3 = fullurl ;
           }
   const fullURL = url3 + '?__a=1'; 

const data = await axios.get(fullURL, { headers: { cookie: `sessionid=${sesi2}` }})
const metaData = data.data.items[0]
   if (metaData.media_type == '2') {

      let data = {
        type: 'video',
        media_count: 1,
        username: metaData.user.username,
        likes: metaData.like_count,
        comments:metaData.comment_count,
        views:metaData.view_count,
        duration:metaData.video_duration,
        caption: metaData.caption ? metaData.caption.text : '-', 
        thumbnail: metaData.image_versions2.candidates[0].url,
        url: metaData.video_versions[0].url,
      };
      return data;
    } else if (metaData.media_type == '1') {
      let data = {
        type: 'image',
        media_count:1,
        username: metaData.user.username,
        likes: metaData.like_count,
        comments:metaData.comment_count,
        views:'not video',
        duration:'not video',
        caption: metaData.caption ? metaData.caption.text : '-', 
        url: metaData.image_versions2.candidates[0].url,
      };
      return data;
      } 
  else if (metaData.media_type == '8') {
     if(metaData.carousel_media[0].media_type == '2'){
        let data =  {
        type: 'video',
        media_count: 1,
        username: metaData.user.username,
        likes: metaData.like_count,
        comments:metaData.comment_count,
        views:'null',
        duration:metaData.carousel_media[0].video_duration,
        caption: metaData.caption ? metaData.caption.text : '-', 
        thumbnail: metaData.carousel_media[0].image_versions2.candidates[0].url,
        url: metaData.carousel_media[0].video_versions[0].url,
      };
      return data;
    } else if (metaData.carousel_media[0].media_type == '1') {
      let data = {
        type: 'image',
        media_count:1,
        username: metaData.user.username,
        likes: metaData.like_count,
        comments:metaData.comment_count,
        views:'not video',
        duration:'not video',
        caption: metaData.caption ? metaData.caption.text : '-', 
        url: metaData.carousel_media[0].image_versions2.candidates[0].url,
      };
      return data;
      } } 
}

module.exports = insta;
                          

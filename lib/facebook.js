const axios = require('axios');

async function fbdl(url) {
  const furl =  url.split('&');
  const surl = furl[0]
  const fullURL ='https://youtube4kdownloader.com/ajax/getLinks.php?video=' + surl + '&rand=a95ce6c6be8b6'; 
  const result = await axios.get(fullURL)
  const metadata =  result.data.data;
  if (metadata.av[0].quality == 'unknown') {
  let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[1].fid,
                   ext: metadata.av[1].ext,
                   url:metadata.av[1].url,
                  
                 },
                { quality: metadata.av[0].fid,
                  ext: metadata.av[0].ext,
                  url:metadata.av[0].url,
                  
                }
                                         ]
  };
   return data;
  } else if (metadata.av[2].quality == 'unknown') {
    if(!metadata.av[3]){
      let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: 'hd',
                   ext: metadata.av[1].ext,
                   url:metadata.av[1].url,
                  
                 },
                { quality: metadata.av[2].fid,
                  ext: metadata.av[2].ext,
                  url:metadata.av[2].url,
                  
                }
                                         ]
  };
   return data;
  }
  else if(metadata.av[3].quality == 'unknown'){let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[3].fid,
                   ext: metadata.av[3].ext,
                   url:metadata.av[3].url,
                  
                 },
                { quality: metadata.av[2].fid,
                  ext: metadata.av[2].ext,
                  url:metadata.av[2].url,
                  
                }
                                         ]
  };
   return data;
  } }
  else if (metadata.av[4].quality == 'unknown') {
  let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[5].fid,
                   ext: metadata.av[5].ext,
                   url:metadata.av[5].url,
                  
                 },
                { quality: metadata.av[4].fid,
                  ext: metadata.av[4].ext,
                  url:metadata.av[4].url,
                  
                }
                                         ]
  };
   return data;
  }
  else { let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[3].fid,
                   ext: metadata.av[3].ext,
                   url:metadata.av[3].url,
                   
                 },
                { quality: metadata.av[2].fid,
                  ext: metadata.av[2].ext,
                  url:metadata.av[2].url,
                  
                }
                                         ]
  };
  return data;
  }
}


const cheerio = require('cheerio')
async function fb2(url)  {
  const ink  = url.replace("?app=fbl" , "")
  const link  = ink.replace("/?app=fbl" , "")
  return new Promise(async (resolve, reject) => {
    const data = await axios({
      url: 'https://downvideo.net/',
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
      },
    })
    const $ = cheerio.load(data.data)
    const token = $('#token').attr('value')
    const getPost = await axios({
      url: 'https://downvideo.net/download.php',
      method: 'POST',
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        cookie: '_gid=GA1.2.1321544464.1633811193; _ga=GA1.2.1392580783.1633811193; __gads=ID=c73de99d7fa5c467-226981f63ecc00f1:T=1633811193:RT=1633811193:S=ALNI_MaC9fW2mqfT2hm7zODcNNffab1XLg',
      },
      data: new URLSearchParams(Object.entries({ URL: link, token: token })),
    })
    const c = cheerio.load(getPost.data)
    const result = {
     author: c('div.row').find('div.col-md-12:nth-child(1)').text(),
     title: c('div.row').find('div.col-md-12:nth-child(3) > p').text(),
     thumbnail: c('div.row').find('div.col-md-12:nth-child(2) > img').attr('src'),
     HD_URL: c('div.row').find('div.col-md-3 > a').eq(0).attr('href') || c('div.row').find('#sd > a').attr('href') || '',
     SD_URL: c('div.row').find('div.col-md-3 > a').eq(1).attr('href') || '',
    }
    resolve(result)
  })
}
module.exports = { fbdl , fb2 }
  

var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var dataPath = path.resolve(__dirname + './../data');
var academicPath = path.resolve(__dirname + './../data/academic')

var baseUrl = 'http://spm.ncu.edu.cn/';

var trim = function(data) {
  return  data.replace(/(^\s+)|(\s+$)/g, '')
}

fs.readFile(dataPath + '/academic.json', 'utf-8', function(err, data) {
  if (data) {
    // 用JSON.parse()方法能读取并格式化JSON数据
    getUrl(JSON.parse(data));
  } else {
    console.log(err);
  }
})

/**
 * 获取URL列表
 * @param  {Array} data JSON文件读取的结果
 */
function getUrl(data) {
  var urlList = [];

  for (x in data) {
    var obj = {};
    obj.href = data[x].href;
    obj.id = data[x].id;
    urlList.push(obj);
  }

  loop(urlList);
}

function loop(data) {

  var urlOptions = {
    method: 'GET',
    url: '',
    encoding: null
  };

  var i = 0;

  for (x in data) {
    urlOptions.url = data[x].href;
    request(urlOptions, function(err, res, body) {

      if (body) {
        var jsonName = data[x].id;
        var html = iconv.decode(body, 'gb2312');
        getContent(html, jsonName)
      }
    });
  }
}

function getContent(data, jsonName) {
  var $ = cheerio.load(data);

  var originalImgList = $('body img').toArray();
  var imgList = [];
  for (var i = 0; i < originalImgList.length - 1; i++) {
    imgList[i] = originalImgList[i]
  };

  var title = $('td span strong')[0].children[0].data;
  var article = $('p span')[4].children;

  var newsList = [];
  var newsObj = {
    content: '',
  }
  for (x in article) {
    if (article[x].name === 'br') {
      newsObj.content += "</br>";
      continue;
    }
    newsObj.content += article[x].data;
  }
  newsList.push(newsObj);
  createJSON(newsList, jsonName)
}

/**
 * 创建JSON文件
 * @param  {Array} data     用于创建JSON文件的数组
 * @param  {String} jsonName 文件名
 */
function createJSON(data, jsonName) {
  fs.writeFile(path.join(academicPath, jsonName + '.json'), JSON.stringify(data), function(err, res) {
    if (err) {
      throw err;
    } else {
      console.log(jsonName + ' ==> Success!');
    }
  });
}

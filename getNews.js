var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var baseUrl = 'http://spm.ncu.edu.cn/static/'

var focusNewsOptions = {
    method: 'GET',
    url: 'http://spm.ncu.edu.cn/static/NewsList.asp?Type=1',
    encoding: null
};

var schoolNoticeOptions = {
    method: 'GET',
    url: 'http://spm.ncu.edu.cn/static/NewsList.asp?Type=2',
    encoding: null
};

var academicOptions = {
    method: 'GET',
    url: 'http://spm.ncu.edu.cn/static/NewsList.asp?Type=3',
    encoding: null
};

request(focusNewsOptions, function(err, res, body) {
    if (body) {
        var jsonName = 'focusNews';
        var html = iconv.decode(body, 'gb2312')
        getFocusNews(html, jsonName, {
            decodeEntities: false
        })
    }
});

request(schoolNoticeOptions, function(err, res, body) {
    if (body) {
        var jsonName = 'schoolNotice';
        var html = iconv.decode(body, 'gb2312')
        getFocusNews(html, jsonName, {
            decodeEntities: false
        })
    }
});

request(academicOptions, function(err, res, body) {
    if (body) {
        var jsonName = 'academic';
        var html = iconv.decode(body, 'gb2312')
        getFocusNews(html, jsonName, {
            decodeEntities: false
        })
    }
});

function getFocusNews(data, jsonName) {
    var $ = cheerio.load(data);
    var focusNews = $('td a').toArray();

    var news = [];
    for (var i = 0; i < 10; i++) {
        var focusNewsTitle = focusNews[i].attribs.title;
        var focusNewsHref = focusNews[i].attribs.href;
        // 创建新闻对象，用于后期创建json数据
        var focusNewsTime = focusNews[i].parent.parent.children[5].children[0].data;
        var newsObj = {};
        newsObj.title = focusNewsTitle;
        newsObj.href = baseUrl+focusNewsHref;
        newsObj.id = i + 1;
        newsObj.time = focusNewsTime;

        news.push(newsObj);
    }
    createJSON(news, jsonName)
}

function createJSON(data, jsonName) {
    fs.writeFile(path.join(__dirname, jsonName+'.json'), JSON.stringify(data), function(err, res) {
        if (err) {
            throw err
        } else {
            console.log(jsonName + ' Success!')
        }
    });
}
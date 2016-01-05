var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var dataPath = path.resolve(__dirname + './../data');

var start = function() {
    var studentWorkOptions = {
        method: 'GET',
        url: 'http://spm.ncu.edu.cn/inner3.asp',
        encoding: null
    };

    var baseUrl = 'http://spm.ncu.edu.cn/';

    request(studentWorkOptions, function(err, res, body) {
        if (body) {
            var jsonName = 'studentWork';
            var html = iconv.decode(body, 'gb2312');
            getNews(html, jsonName, {
                decodeEntities: false
            });
        }
    });

    function getNews(data, jsonName) {
        var $ = cheerio.load(data);
        var news = $('td a').toArray();
        var newsList = [];

        var re = /[\d]{4}.[\d]{2}.[\d]{2}/g;
        for (var i = 0; i < 10; i++) {
            var newsTitle = news[i].attribs.title;
            var newsHref = baseUrl + news[i].attribs.href;
            var newsTime = news[i].parent.parent.children[7].children[0].data;

            var newsObj = {};
            newsObj.title = newsTitle;
            newsObj.time = newsTime;
            newsObj.href = newsHref;

            newsList.push(newsObj);
        }
        createJSON(newsList, jsonName);
    }

    function createJSON(data, jsonName) {
        fs.writeFile(path.join(dataPath, jsonName + '.json'), JSON.stringify(data), function(err, res) {
            if (err) {
                throw err;
            } else {
                console.log(jsonName + ' ==> Success!');
            }
        });
    }
};

exports.start = start;

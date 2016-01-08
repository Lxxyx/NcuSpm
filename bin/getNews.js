var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var dataPath = path.resolve(__dirname + './../data');

/**
 * 用于配置基本URL
 * @type {String}
 */
var baseUrl = 'http://spm.ncu.edu.cn/static/';

var start = function() {

  /**
   * 焦点新闻爬虫的配置
   * @type {Object}
   */
  var focusNewsOptions = {
    method: 'GET',
    url: 'http://spm.ncu.edu.cn/static/NewsList.asp?Type=1',
    encoding: null
  };

  /**
   * 学院公告爬虫的配置
   * @type {Object}
   */
  var schoolNoticeOptions = {
    method: 'GET',
    url: 'http://spm.ncu.edu.cn/static/NewsList.asp?Type=2',
    encoding: null
  };

  /**
   * 学术活动爬虫的配置
   * @type {Object}
   */
  var academicOptions = {
    method: 'GET',
    url: 'http://spm.ncu.edu.cn/static/NewsList.asp?Type=3',
    encoding: null
  };

  /**
   * 获取焦点新闻
   */
  request(focusNewsOptions, function(err, res, body) {
    if (body) {
      var jsonName = 'focusNews';
      var html = iconv.decode(body, 'gb2312');
      getFocusNews(html, jsonName, {
        decodeEntities: false
      })
    }
  });

  /**
   * 获取学院通知
   */
  request(schoolNoticeOptions, function(err, res, body) {
    if (body) {
      var jsonName = 'schoolNotice';
      var html = iconv.decode(body, 'gb2312');
      getFocusNews(html, jsonName, {
        decodeEntities: false
      });
    }
  });

  /**
   * 获取学术活动
   */
  request(academicOptions, function(err, res, body) {
    if (body) {
      var jsonName = 'academic';
      var html = iconv.decode(body, 'gb2312');
      getFocusNews(html, jsonName, {
        decodeEntities: false
      });
    }
  });

  /**
   * 获取新闻，创建对象，并且传入数据库
   * @param  {html} data     获取到的json数据
   * @param  {String} jsonName 要创建的json文件名称
   */
  function getFocusNews(data, jsonName) {
    var $ = cheerio.load(data);
    var focusNews = $('td a').toArray();

    var news = [];

    /**
     * 存放新闻数据的对象
     * @type {Object}
     */
    var newsObj = {
      title: null,
      time: null,
      href: null
    };

    for (var i = 0; i < 10; i++) {
      var focusNewsTitle = focusNews[i].attribs.title;
      var focusNewsHref = focusNews[i].attribs.href;
      // 创建新闻对象，用于后期创建json数据
      var focusNewsTime = focusNews[i].parent.parent.children[5].children[0].data;


      newsObj.title = focusNewsTitle;
      newsObj.time = focusNewsTime;
      newsObj.href = baseUrl + focusNewsHref;

      news.push(newsObj);
    }
    /**
     * 调用JSON创建函数
     */
    createJSON(news, jsonName);
  }

  /**
   * 创建JSON文件
   * @param  {Array} data     用于创建JSON文件的数组
   * @param  {String} jsonName 文件名
   */
  function createJSON(data, jsonName) {
    fs.writeFile(path.join(dataPath, jsonName + '.json'), JSON.stringify(data), function(err, res) {
      if (err) {
        throw err;
      } else {
        console.log(jsonName + '==> Success!');
      }
    });
  }

};

/**
 * 导出Start函数
 * @type {Function}
 */
exports.start = start;

var getStudent = require('./getStudent.js');
var getNews = require('./getNews.js');

/**
 * 导入后启动抓取服务
 */
getStudent.start();
getNews.start();
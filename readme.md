## 项目情况
### 简介：
一直想重构自己学院的官网。项目于2015.12.24正式开始。数据直接从原官网获取。图片等文件则使用爬虫爬取并自动上传到七牛。（图片上传暂未实现）
### 项目后台：
Node+Express
### 数据来源：
Cheerio+Request爬虫。存在项目的json文件中。
### 前端：
使用AmazeUI框架+Vue.js+Vue-loader+Webpack（组件化）
## 项目构思
后台只负责数据的抓取和提供API。前端则通过Ajax获取数据，通过Vue进行列表渲染。
因为数据量比较小，所以没有采用数据库。且也没有在新浪云上找到MongoDB的使用方式。
预期是在服务器上，每十二个小时就去爬取一次网页，然后更新JSON文件。
### 地址
[南昌大学公共管理学院](http://www.ncuhr.win)

## 项目结构
│  .gitignore
│  app.js  服务器启动程序
│  package.json
│  readme.md
│  
├─bin  爬虫程序
│      getNews.js  获取学院官网中焦点新闻，通知公告与学术活动的爬虫
│      getStudent.js  获取学院官网学生工作的爬虫
├─data  数据文件
│      academic.json  “学术活动”的数据文件
│      focusNews.json  “焦点新闻”的数据文件
│      schoolNotice.json  “通知公告”的数据文件
│      studentWork.json “学生工作”的数据文件
│      
├─public  前端代码
│  │  index.html  首页文件
│  │  package.json
│  │  webpack.config.js  webpack配置文件
│  │  webpack.config.min.js webpack配置文件，加入代码压缩
│  │  
│  ├─app  
│  │  │  main.js  首页代码
│  │  │  
│  │  ├─components  Vue组件
│  │  │  │  bottom.vue
│  │  │  │  header.vue
│  │  │  │  index.vue
│  │  │  │  news.vue
│  │  │  │  slide.vue
│  │  │  │  
│  │  │  └─news
│  │  │          academic.vue
│  │  │          focusNews.vue
│  │  │          schoolNotice.vue
│  │  │          studentWork.vue
│  │  │          
│  │  └─css  
│  │          style.css
│  │          
│  ├─fonts
│  │      
│  ├─img
│  │ 
│  └─webpack_js  Webpack打包文件存放处
│          index.js
│          
├─routes  路由
│      api.js 
│      index.js
│      users.js
│      
└─views  渲染引擎
        error.jade
        index.jade
        layout.jade
        

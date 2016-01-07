<template>
  <header>
      <ul>
        <li>
          公管概况
          <ul>
            <li>学院概况</li>
          </ul>
        </li>
        <li>学生培养</li>
        <li>想不出来</li>
        <li>关于作者</li>
      </ul>
    </header>
  <div class="container">
    
  </div>
</template>

<script>
  require('./assests/normalize.css');
</script>

<style type="text/css">
  body {
    background: url('./assests/bg1.jpg');
    font-family: "Microsoft YaHei";
  }

  .container {
    width: 1080px;
    height: auto;
    margin: 0 auto;
  }

  header {
    color:#3f3f3f;
  }

  header ul {
    list-style-type: none;
    float: right;
    margin-top: 0;
  }

  header li {
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    position: relative;
  }

  header li:hover {
    color:red;
  }

  header li>ul {
    position: absolute;
    width: 60px;
    display: inline-block;
  }
</style>
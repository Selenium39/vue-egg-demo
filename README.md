# vue-egg-demo

<img src="https://github.com/wantao666/vue-egg-demo/blob/master/2980k-bos1c.gif"/>



### 一、运行
1. egg-server/config.default.js中修改mysql数据库密码为你自己数据库密码。<br/>,如果你的数据库是mysql8.0版本，还要做额外操作:https://yq.aliyun.com/articles/705235
2. mysql -u root -p ${你的数据库密码} <br/>
   create database vue_egg_test;<br/>
   use vue_egg_test;<br/>
   source /egg-server/vue_egg_test.sql<br/>
3. 进入egg-server
   npm i<br/>
   npm run dev<br/>
4. 进入vue-client
   npm i<br/>
   npm run dev<br/>
   
### 二、主要技术
    前端:Vue.js+Vant+Axios
    后端:Egg.js
    数据库:mysql
    时间处理插件:moment

# vueproject-for-financial-info
>此项目为AppDemo,基于Vue-cli/iview/Vant/express,主要功能是实时展示金融信息以及行情资讯
### **界面**
* 新闻资讯页面，传统竖式排版+轮播
* 行情短讯页面，左右换动+下拉加载
* 股票外汇等行情页
* 客户信息页

### 目录结构

<!--more-->

```
|——canvas-vue/
|   |——build/
|   |——confg/
|   |——node_modules/
|   |——src/
|   |   |——api/                    //后台设定
|   |   |   |——artical.json        //文章静态后台(in case no net/)
|   |   |   |——index.js            //后台接口
|   |   |   |——mock,js             //express页
|   |   |   |——slide.json          //轮播静态后台(in case no net)
|   |   |——components/             //页面组件
|   |   |   |——Home.vue            //首页
|   |   |   |——shownews.vue        //短讯页面
|   |   |   |——showinfo.vue        //行情页面
|   |   |   |——mypresent.vue       //用户信息
|   |   |   |——...                 //等等
|   |   |——router/                 
|   |   |   |——index.js            //页面路由
|   |   |   |——tab.vue             //子路由
|   |   |——App.vue                 //父组件
|   |   |——main.js                 //入口文件
|   |——static/                     
|   |——.babelrc
|   |——.editorconfig
|   |——.gitgnore
|   |——index.html
|   |——package.json
|   |——README.md
```

### 备注
>由于要上线打包，所以webpack devserver 端口和 express 端口一致了，想看结果的改下express端口即可

>The port for webpack devserver is the same to express port, so it won't work when you just open the devserver,change the express port and open them at the same time

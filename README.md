hot.ingbaobei.com
===================

盈保倍专题。 [hot.ingbaobei.com](http://hot.ingbaobei.com/index.html)  
这个是github 上面的查看地址 [http://ingbaobeigroup.github.io/hot.ingbaobei.com](http://ingbaobeigroup.github.io/hot.ingbaobei.com)   [http://hot.ingbaobei.com/](http://hottest.ingbaobei.com/)  

------

这是盈保倍专题，项目线上版本存储在七牛静态存储，所以每次发布都需要进行更新部分文件。

下面每一个目录都为一次专题。


##开发分支
自己处理，仓库为 ```master``` 和 ```gh-pages```


##本地使用

1、保存到本地  
```
git clone git://github.com/ingbaobeigroup/hot.ingbaobei.com.git  
```

2、到当前目录下面，使用静态文件存储，进行发布。  
这里采用了朴灵大神的静态文件服务器，  
先安装[nodejs](http://nodejs.org/)  

再安装 cnpm
```
$ npm i -g cnpm
```

再安装 anywhere
```
$ cnpm i -g anywhere
```

然后，运行
```
$ cd /path to project
$ anywhere 80
```

然后就能运行了。浏览器此时目测自动打开了这个网页了。

##文件架构
```
\hot.ingbaobei.com
  robots.txt: robots.txt，默认全部搜索引擎。
  @: 对应七牛设置的
    文件夹： 各个专题
```




先运行服务
```
anywhere 80
```
然后浏览器会蹦个页面出来对吧，不管他了，访问这里，查看最新版本的
```
http://你的ip/
```


本地测试没问题是吧，有问题，就继续重头回跑过流程吧。没问题了，通过微信客户端打开这个网站，当然这个时候可以登录微信网页版把链接发送到对话窗口就能打开啦。

测试手机都没问题之后，就发布吧。

##发布
登录七牛，选择 轻APP 的那个空间，然后根据 文件地址发布就行了。

##查看效果
打开 chrome 或其他浏览器。
关闭所有的 隐私模式 下面的网页，再新打开一个 隐私模式 的网页，chrome 下面快捷键 ``` ctrl + shift + n ``` 就能打开，然后输入
```
http://hot.ingbaobei.com/
```

打开，就能查看。 [这里](http://hot.ingbaobei.com/)  
没啥错误的话，就可以了。如果有错误。那就只能重新发布了。肯定是操作失误就对了。

##提交版本
效果算是查看完毕了，那就 提交版本吧。把这个提交到github上面，管理员会做事的了。至于怎么提交，这个见仁见智，反正 git 这个工具，基本都懂，不同平台，都不同。


##怎么开发这个？
项目的 css 采用的是 less 编写，使用 [koala](http://koala-app.com/) 进行编译。
然后 js 是使用 grunt 进行 构建的，开发版本可以使用单独的 js 引入进行开发。
生产版本必须安装环境，然后构建。  
安装环境 
``` 
1、nodejs
2、npm
3、cnpm
```
然后，``` cnpm install ```
最后大刀下去
``` grunt ``` 即可。 ```Gruntfile.js``` 里面已经写好了 ```default``` 任务了。
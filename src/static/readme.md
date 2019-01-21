
<h2 id="link1"> 概述 </h2>

&nbsp;&nbsp;`ynpm`是一款基于用友内部的镜像库，为用友内部打造一个优质的代码共享平台、业务组件的多样性、组件能力最大化的输出。把各种组件、工具的能力快速输出到各个项目中，提高项目的开发速度、节省项目成本、从而实现组件价值最大化、利益的最大化。
  
&nbsp;&nbsp;`ynpm`还提供组件的上传、下载的以及热门组件的统计。进行有针对性的进行组件优化和能力的持续集成。


### ynpm 功能特性

 1. 根据用户网络进行自动匹配、自动切换、内网快速下载
 2. 镜像无需同步，下载即缓存，实现一次下载，全员共享
 3. 安全可靠，友互通域账号权限校验
 4. 内网发包配置简单、融合`github`设置`sshk`模式
 5. 提供强大的`cli`工具、模块化的实现、快速融合其他`cli`工具
 6. 不对`npm`的镜像源入侵
  
### 基本原理

 1. 使用 Nexus Repository OSS 构建镜像
 2. 使用自己独立的数据存储、资源包做统计
 3. 使用`koa+node`做中间层做请求转发和校验机制
 4. `react`开发独立的官网站点

<h2 id="link2"> 开始使用 </h2>

### 安装

>请确认你在本地全局安装了`Node.js`，然后使用`npm`将`ynpm`全局安装：

```
$ npm install ynpm-tool -g	
```

### 下载 package 

> 安装到dependencies依赖的包

``` 
$ ynpm install @yonyou/xxx --save
``` 

> 安装到devDependencies依赖的包 

``` 
$ ynpm install xxx --save-dev
```

> 也可以直接使用简写:

```
$ ynpm i @yonyou/xxx -D
```

> 显示ynpm的帮助信息/版本号；

```
$ ynpm -h/v
```

<h2 id="link3"> ynpm发包 </h2>

1. 设置 ynpm

>用户名必须是登录友互通的用户名

```
$ ynpm set user=xxx
```

>邮箱必须是登录友互通的邮箱或者手机号

```
$ ynpm set email=xxx

```
>显示sshk(不显示sshk见QA)

```
$ ynpm sshk
```

2.&nbsp;复制sshk[登陆官网](https://package.yonyoucloud.com/)-->选择头像-->选择设置sshk (如图)

![新增sshk](http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/ynpm/image/8194969-cda1b44fc7272cab.jpeg)

3.&nbsp;发布

```
$ cd xx_component && ynpm publish
```

>显示finish xx_component且提示包的版本号 表示成功

 [官网搜索包名](https://package.yonyoucloud.com)

 
<h3 id="link4"> 发包规范 </h3>
  
> 应用组件的开发，我们使用ac-tools来作为我们开发的cli工具，后续我们还需要做应用组件一览表的入口和应用组件的统计，所以我们需要对应用组件做统一规划，希望大家遵循以下规则。(否则会漏掉你的组件哦~~)
  
1. 命名以 ac-xx 开头。e.g: ac-button 等。

2. 使用 ac-tools init 下载组件模板，基于模板开发。 
    [ac-tools 使用](https://github.com/tinper-acs)

3. 应用组件代码可以托管在 github、gitlab(带业务的组件) 
[gitlab 内部](http://git.yonyou.com/tinper-acs)&nbsp;&nbsp; [github 外部](https://github.com/tinper-acs)

4.package.json(必填项 部分)

    1. name ：模块名称，内部包统一用(@yonyou/xx)作为前缀

    2. homepage ：组件主页url，eg: http://xx.git#redme

    3. author ：作者

    3. repository ：指定一个代码存放地址。string or object

      repository:'https://xxx.git' 
      repository:{'url' : 'https://xxx.git'}
 

[更多npm规范](https://docs.npmjs.com/files/package.json)   &nbsp;&nbsp; [例子](https://github.com/tinper-acs/ac-button/blob/master/package.json)


	 
<h2 id="link5"> Q&A常见问题 </h2>


1. <strong>下载包极慢，报错timeout</strong>
    
    根据反馈，少数包会报错。原因是安装包依赖一个外链下载(可能是github或amazon等第三方地址)。因为众所周知的原因，你很有可能下载不到从而出现timeout(相同的问题cnpm也会存在）.

2. <strong>install 的时候出现 401 权限问题</strong>
  
  >请执行   
  
  ```
   rm -rf ~/.ynpmrc
  ```
3. <strong>发包出现 400、401 的情况</strong>

    请重新 set 用户名、密码以及设置sshk
   
4. <strong>windows电脑sshk不显示</strong>
    > window电脑请使用`git bash`窗口模式,执行
    
    ```
    cat ~/.ynpmrc  # _auth后面的就是sshk
    ```
     
5. <strong>官网提示‘该包上传时没有文档’</strong>
    > package.json 的repository 没有设置或者设置不对。
    
    ```
    eg: 
    
	  repository:'https://xxx.git' 
	  repository:{'url' : 'https://xxx.git'}
    ```

6. <strong>项目的package.json的name和需要下载的包名相同报错</strong>

![包名冲突](http://upload-images.jianshu.io/upload_images/8194969-c40bebe218624e98?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 请改变package.json中的name


<strong>如果您尝试多次，自己无法解决的问题请反馈给我们 &nbsp; 
[问题反馈](https://github.com/iuap-design/ynpm-tool/issues) 、联系我们解决问题</strong> 

<center>
  <img src="http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/ynpm/image/team2001.png" width="300" hegiht="100" align=center /></center>

</br>

#### <center>您的点赞是我们前进的动力</center></br>


<center>
  <img src="http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/ynpm/image/team1001.png" align=center /></center>




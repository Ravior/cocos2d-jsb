Markdown语法
大标题  
===================================  
1、大标题一般显示工程名,类似html的\<h1\><br />  
2、你只要在标题下面跟上=====即可<br />  
3、"\<br />"为换行符
* 根目录
## 中标题

中标题
-----------------------------------
1、中标题一般显示重点项,类似html的\<h2\><br />  
2、你只要在标题下面输入------即可

### 小标题  
1、小标题类似html的\<h3\><br />  
2、小标题的格式如下 ### 小标题<br />  
3、注意#和标题字符中间要有空格 

### 单行文本框
    1、这是一个单行的文本框,只要两个Tab再输入文字即可

### 多行文本框
	1、这是一行多文本
	2、你可以写入代码等,每行文字只要输入两个Tab再输入文字即可
	3、这里你可以输入一段代码

## 目录说明

* 根目录为cocos2d-x引擎的文件
* 项目位置：/projects/*

## 注意信息
* 理论上所有编译后的文件都不要传到GIT上，GIT上只保留源码


## 项目目录说明
* /projects/SJ108JSBinding/                           -- 项目根目录
* /projects/SJ108JSBinding/Classes/                   -- C++源码目录
* /projects/SJ108JSBinding/proj.android/*             -- 安卓apk的项目目录（推荐使用Eclipse打开）
* /projects/SJ108JSBinding/proj.ios/*                 -- 苹果Ios的项目目录（推荐使用Xcode打开）
* /projects/SJ108JSBinding/proj.win32/*               -- Win32的项目目录（推荐使用VS2012）
* /projects/SJ108JSBinding/Resources/*                -- 主程序目录（通常情况下是在这里修改源码）
* |---------------------------------/res/*            -- 主程序资源目录
* |---------------------------------/main.js          -- 主程序入口
* |---------------------------------/src/*            -- 主程序源码（Javascript）
* |-------------------------------------/configs/*    -- 客户端配置文件
* |-------------------------------------/ui/*         -- UI控件（自定义精灵、通用控件等）
* |-------------------------------------/utils/*      -- 辅助类（通用辅助类，函数等）
* |-------------------------------------/views/*      -- 视图层（场景、层等）
* /projects/SJ108JSBinding/UI/*                       -- UI资源编辑
* /projects/SJ108JSBinding/Win32Debug.bat             -- Win32调试BAT



## 编译方法Win32
* 1、先编译引擎，项目文件：/cocos2d-win32.vc2012.sln或者/cocos2d-win32.vc2010.sln
* 2、编译《神将》项目的Win32程序：/projects/SJ108JSBinding/proj.win32/SJ108JSBinding.sln
* 3、修改Javascript源码后如果需要调试，无需重新生成Win32的文件，运行：/projects/SJ108JSBinding/Win32Debug.* bat即可。Win32Debug.bat里面的路径需要根据自己的目录修改才能运行。

## 编译方法Android
* ...
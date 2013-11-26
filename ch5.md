Cocos2d-html5

### 1、常见缩写
	1、cc.p(0,0);
	2、cc.c3b(117,76,34);  //颜色
	3、cc.RANDOM_0_1()； //产生一个随机数
	4、cc.PointMake(0,0);  //等同于cc.p(0,0);
	5、cc.c4(117,76,34,255); //前三个参数为RGB，后一个为透明度
	6、cc.log("打印的语句")； //日志

### 2、常见语句
	1、cc.Director.getInstance(); //获取Director单例对象
	2、var scene=cc.Scene.create();  //获取一个scene对象
	3、var menuItemImage=cc.MenuItemImage.create(s_normal,s_selected,this,callBackFunc); //创建MenuItemImage
	4、var menu=cc.Menu.create(menuItemImage); //创建Menu
	5、this._super();  //调用父类的同名函数
	6、ctor:function(){};  //构造函数
	7、cc.Sprite.stopAllActions();  //停止所有动作
	8、var label=cc.LabelTTF.create("文字"，“Arial",18);//参数1：字符串  参数2：字体(系统字体)  参数3：文字大小
	9、label.setColor(cc.c3b(117,76,36)); //改变文字颜色
	10、var menuItemSprite= cc.MenuItemSprite.create(normalSprite, selectedSprite, fun, this);//参数1：正常状态 参数2：摁下选中状态 参数3：执行函数 参数4：一般传入this
	11、var texture = cc.TextureCache.sharedTextureCache().addImage("Resources/dragon_animation.png");//将图片资源存入缓存，以减少内存
	12、var frame0 = cc.SpriteFrame.create(texture, cc.RectMake(104, 0, 64,110));   //在加载的图片对象上，定位一个方位及宽高，就可以创建一个精灵帧
	13、var animation = cc.Animation.create(animFramesArr, 0.2);//将所有的动画帧，以间隔0.2秒速度播放
	14、var animate = cc.Animate.create(animation);//动画动作
	15、var layer1=cc.LayerColor.create(cc.c4(255,255,0,255),320,480); //创建一个纯颜色层
	16、cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true); //添加单指触摸事件监听











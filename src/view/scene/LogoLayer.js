/**
 * User: Ravior
 * Dec:LogoLayer
 */

var LogoLayer=cc.Layer.extend({
    init:function(){
        //调用父类的同名函数
        this._super();
        //背景层
        var colorLayer=cc.LayerColor.create(cc.c4(255,255,255,255));

        var winSize=cc.Director.getInstance().getWinSize();
        var logoSprite=cc.Sprite.create("logo.png");
        logoSprite.setPosition(cc.p(winSize.width/2,winSize.height/2));
        this.addChild(colorLayer,logoSprite);
        return true;
    }

})

LogoLayer.createScene=function(){
    var scene=cc.Scene.create();
    var logoLayer=new LogoLayer();

}

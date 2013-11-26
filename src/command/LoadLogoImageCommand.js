/**
 * User: zhoufei
 * Class: 加载主场景资源文件及公用资源文件
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.LoadLogoImageCommand',
        parent:puremvc.AsyncCommand
    },
    //INSTANCE MEMBERS
    {
        /** @override */
        execute:function (note) {
            cc.log('LoadLogoImageCommand execute');
            cc.TextureCache.sharedTextureCache().addImage("Resources/dragon_animation.png");
            this.onComplete();
        },

        onComplete:function(){
            cc.log('LoadLogoImageCommand complete');
            this.commandComplete();
        }
    }
)

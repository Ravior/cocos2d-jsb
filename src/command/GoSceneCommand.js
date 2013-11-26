/**
 * User: Ravior
 * Desc: 场景转换器
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.GoSceneCommand',
        parent:puremvc.SimpleCommand
    },
    //INSTANCE MEMBERS
    {
        /** @override */
        execute:function (note) {
            var list = [];
            var mediator = note.getBody();
            var data;
            var descript = "加载资源文件…";
            var proxy;
            this.typeName = null;
            //清空缓存
            cc.TextureCache.sharedTextureCache().removeUnusedTextures();
            cc.SpriteFrameCache.sharedTextureCache().clear();
            cc.AnimationCache.share().clear();
            switch(mediator){
                //游戏启动Logo页面
                case app.mediator.scene.LogoMediator:
                    break;
            }

            if(list.length > 0){
//            var handler = ClassUtils.delegate(this, this.onComplete, mediator, data);
//            //{value:"加载的内容数组", hide:true, callback:回调方法, descript:'描述文字'}
//            this.sendNotification(app.command.CommandType.LOAD, {value:list, callback:handler, descript:descript});
            }else{
                this.onComplete(mediator, data);
            }
        },
        onComplete:function(mediator, data){
            var _prevMediator = this.preMediator;
            //如果前一个场景为空，即将开启Logo场景
            if(_prevMediator != null){
                //清除前一场景内容
                this.sendNotification(_prevMediator.CLOSE);
                //记录前一场景
                this.preMediator = _prevMediator;
            }

            //记录当前场景名称
            this.sceneMediator = mediator;

            this.sendNotification(mediator.SHOW, data);
        }
    },
    //static members
    {
        //前一个场景
        preMediator:null,
        //当前场景
        sceneMediator:null
    }

)

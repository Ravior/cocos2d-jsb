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
            var mediator = note.getBody();
            switch(mediator){
                //登陆场景
                case app.mediator.scene.LoginMediator:
                    break;
            }
            this.onComplete(mediator);
        },
        onComplete:function(mediator){
            var _prevMediator = this.preMediator;
            //如果前一个场景为空
            if(_prevMediator != null){
                //清除前一场景内容
                this.sendNotification(_prevMediator.CLOSE);
                //记录前一场景
                this.preMediator = _prevMediator;
            }

            //记录当前场景名称
            this.sceneMediator = mediator;

            this.sendNotification(mediator.SHOW);
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

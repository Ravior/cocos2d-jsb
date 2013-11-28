/**
 * User: Ravior
 * Dec:Logo场景 Mediator
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.mediator.scene.LogoMediator',
        parent:puremvc.Mediator
    },
    //INSTANCE MEMBERS
    {
        /**@Override**/
        listNotificationInterests:function(){
            var _self=app.mediator.scene.LogoMediator;
            return [_self.SHOW,
                _self.CLOSE
            ];
        },

        /**@Override**/
        handleNotification:function(note){
            var _self=app.mediator.scene.LogoMediator;
            switch(note.getName()){
                case _self.SHOW:
                    //主场景view
                    this._init();
                    break;
                //建筑信息发生改变
                case _self.CLOSE:
                    this.viewComponent.depose();
                    this.setViewComponent(null);
                    break;
            }
        },

        /** 初始化view
         *  @private
         */
        _init:function(){
            if(!this.viewComponent){
                var scene=cc.Scene.create();
                var layer = new LoginLayer();
                if (layer && layer.init()) {
                    scene.addChild(layer);
                }
                this.setViewComponent(layer);
                this.viewComponent.addEventListener(LoginLayer.Login,this);
                cc.Director.getInstance().runWithScene(scene);
            }
        },

        handleEvent:function (event) {
            switch (event.type) {
                case LoginLayer.Login:
                    cc.log("登陆");
                    break;
            }
        }
    },
    //STATIC MEMBERS
    {
        /**
         * @static
         * @type {string}
         */
        NAME:'LogoMediator',

        SHOW:'Logo_SHOW',

        CLOSE:'Logo_Close'
    }
)


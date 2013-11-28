/**
 * User: Ravior
 * Dec:Logo场景 Mediator
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.mediator.scene.LoginMediator',
        parent:puremvc.Mediator
    },
    //INSTANCE MEMBERS
    {
        /**@Override**/
        listNotificationInterests:function(){
            return [
                app.mediator.scene.LoginMediator.SHOW,
                app.Proxy.LoginProxy.LoginComplete
            ];
        },

        /**@Override**/
        handleNotification:function(note){
            switch(note.getName()){
                case app.mediator.scene.LoginMediator.SHOW:
                    //主场景view
                    this._init();
                    break;
                //请求完成
                case app.Proxy.LoginProxy.LoginComplete:
                    if(this.viewComponent){
                        var code=note.getBody();
                        //登陆成功
                        if(code==1){
                            cc.log("登陆成功！");
                        }
                        //登陆失败
                        else{
                            cc.log("登陆失败！");
                        }
                    }
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
                this.viewComponent.eventManager.addEventListener(LoginLayer.Login,this);
                cc.Director.getInstance().runWithScene(scene);
            }
        },

        handleEvent:function (event) {
            switch (event.type) {
                case LoginLayer.Login:
                    cc.log("登陆");
                    //发送请求
                    this.facade.retrieveProxy(app.Proxy.LoginProxy.NAME).login();
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
        NAME:'LoginMediator',

        SHOW:'Login_SHOW'
    }
)


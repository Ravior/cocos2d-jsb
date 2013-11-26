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
                var scene=LogoLayer.createScene();
                this.setViewComponent(scene);
                cc.Director.getInstance().runWithScene(scene);
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


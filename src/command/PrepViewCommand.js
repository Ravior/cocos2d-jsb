/**
 * User: Ravior
 * Class:注册Mediator
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.PrepViewCommand',
        parent:puremvc.SimpleCommand
    },
    //INSTANCE MEMBERS
    {
        /**@Override**/
        execute:function(note){
            cc.log("PrepViewCommand execute!");
            //主场景
            this.facade.registerMediator(new app.mediator.scene.LoginMediator());
        }
    }
)

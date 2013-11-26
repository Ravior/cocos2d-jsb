/**
 * User: Ravior
 * Class: 注册Proxy
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.PrepModelCommand',
        parent:puremvc.SimpleCommand
    },
    //INSTANCE MEMBERS
    {
        /**@Override**/
        execute:function(note){
            cc.log("PrepModelCommand execute!");
            this.facade.registerProxy(new app.proxy.GameInfoProxy());
            this.facade.registerProxy(new app.proxy.InitProxy());
            this.facade.registerProxy(new app.proxy.UserInfoProxy());
            this.facade.registerProxy(new app.proxy.LevelUpProxy());
            this.facade.registerProxy(new app.proxy.HomeProxy());
            this.facade.registerProxy(new app.proxy.IndicateProxy());
            this.facade.registerProxy(new app.proxy.HerosProxy());
            this.facade.registerProxy(new app.proxy.BagProxy());
            this.facade.registerProxy(new app.proxy.ScienceProxy());
        }
    }
)

/**
 * User: Ravior
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.InitCommand',
        parent:puremvc.AsyncMacroCommand
    },
    //INSTANCE MEMBERS
    {
        /**@Override**/
        initializeMacroCommand:function(){
            cc.log("InitCommand execute!");
            //加载第一个场景资源文件
            this.addSubCommand(app.command.LoadCacheCommand);
        },

        /**@Override**/
        commandComplete:function(){
            cc.log("InitCommand completed!");
            //进入主场景
            this.sendNotification(app.command.CommandType.GO_SCENE, app.mediator.scene.LogoMediator);
        }
    }
)

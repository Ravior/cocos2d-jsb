/**
 * User: Ravior
 * Class: 游戏启动命令
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.StartUpCommand',
        parent:puremvc.MacroCommand
    },
    //INSTANCE MEMBERS
    {
        /**@Override**/
        initializeMacroCommand:function(){
            cc.log("StartUpCommand initialized!");
            //注册Command
            this.addSubCommand(app.command.PrepControllerCommand);
            //注册Proxy
            this.addSubCommand(app.command.PrepModelCommand);
            //注册Mediator
            this.addSubCommand(app.command.PrepViewCommand);
            //游戏初始化命令
            this.addSubCommand(app.command.InitCommand);
        }
    }
)

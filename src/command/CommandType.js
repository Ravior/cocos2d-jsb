/**
 * User: Ravior
 * Class: 所有命令类型集合
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.CommandType'
    },
    //INSTANCE MEMBERS
    {
    },
    //STATIC MEMBERS
    {
        //游戏启动，触发StartUpCommand
        START_UP:'START_UP',

        //资源加载,触发LoadCommand
        LOAD:'Load',

        //场景切换,触发GoSceneCommand
        GO_SCENE: 'CommandType_GOScene'
    }
)

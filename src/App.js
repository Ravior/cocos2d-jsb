/**
 * User: Ravior
 * Dec:游戏全局配置
 */

var app={
    Config:{
        debug:true,
        size:{width:640, height:1136},
        font:{family:'Arial', xsmall:20, small:24, medium:28, large:32, xlarge:40, xxlarge:60},
    },
    GameData:{
        storage:sys.localStorage，
        server: null,
        servers:[
            {name:'双线一服',host:'http://sj108test.96pk.com:9191/'}
        ]
    },
    getServiceURL:function(){
        if(app.GameData.server&&app.GameData.server.host){
            return app.GameData.server.host;
        }
        else{
            cc.log("获取当前服务器URL失败！");
        }
    }
}

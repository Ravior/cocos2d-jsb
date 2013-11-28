/**
 * User: Ravior
 * Dec:主文件
 */

(function(){
    require("jsb.js");
    var appFiles=[
        // Resource
        'src/Resource.js',
        // 外部库
        'lib/puremvc-1.1.js',
        //自定义扩展库
        'ext/data/Http.js',
        'ext/utils/ClassUtils.js',
        'ext/utils/Global.js',
        'ext/utils/EventDispatcher.js',
        //
        'src/App.js',
        'src/GameFacade.js',
        //Command
        'src/command/AsyncCommand.js',
        'src/command/AsyncMacroCommand.js',
        'src/command/CommandType.js',
        'src/command/StartUpCommand.js',
        'src/command/PreControllerCommand.js',
        'src/command/PreModelCommand.js',
        'src/command/PreViewCommand.js',
        'src/command/GoSceneCommand.js',
        'src/command/InitCommand.js',
        'src/command/LoadCacheCommand.js',
        //Mediator
        'src/mediator/scene/LoginMediator.js',
        //View
        'src/view/scene/LoginLayer.js'


    ];
    cc.dumpConfig();
    var len=appFiles.length;
    for(var i=0;i<len;i++){
        require(appFiles[i]);
    }
    //启用PureMVC
    app.GameFacade.getInstance(app.GameFacade.NAME).startup();

})()

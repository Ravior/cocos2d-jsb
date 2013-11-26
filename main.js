/**
 * User: Ravior
 * Dec:主文件
 */

(function(){
    require("jsb.js");
    var appFiles=[
    ];
    cc.dumpConfig();
    var len=appFiles.length;
    for(var i=0;i<len;i++){
        require(appFiles[i]);
    }
    var director=cc.Director.getInstance();
    var platform=sys.os;
    if(platform!="android"){
        director.setDisplayStats(false);
    }
    else{
        director.setDisplayStats(true);
    }
    director.setAnimationInterval(1.0/60);
    //启用PureMVC
    app.GameFacade.getInstance(app.GameFacade.NAME).startup();

})()

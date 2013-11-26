/**
 * User: Ravior
 * Date: 13-11-25
 * Time: 下午3:53
 * Dec:主文件
 */

require("jsb.js");

var appFiles=[
];

cc.dumpConfig();

(function(){
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

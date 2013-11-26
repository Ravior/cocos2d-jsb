/**
 * User: WangY
 * Date: 12-2-8
 * Time: 上午10:50
 */

/**
 * 本地存储类
 *
 */

(function(window){
    var LocalData = {};
    LocalData.save = function(key, data)
    {
        window.localStorage.setItem(key, JSON.stringify(data));
    };

    LocalData.get = function(key){
        var data = window.localStorage.getItem(key);
        if(data){
            return JSON.parse(data);
        }else{
            return null;
        }
    };

    LocalData.remove = function(key){
        window.localStorage.removeItem(key);
    };

    LocalData.clear = function()
    {
        window.localStorage.clear();
    };

    LocalData.getAll = function()
    {
        var storage = window.localStorage;
        var data = {};
        for(var i=0;i<storage.length;i++){
            //key(i)获得相应的键，再用getItem()方法获得对应的值
            data[storage.key(i)] = JSON.parse(storage.getItem(storage.key(i)));
        }
        return data;
    };
        
    window.LocalData = LocalData;
})(window);
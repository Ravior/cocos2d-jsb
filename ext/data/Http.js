/**
 * User: Ravior
 * Date: 13-11-25
 * Time: 下午4:08
 * Dec:Http请求
 */
var Http = Http||{};

/**
 * Make data request to server-side
 * @param {String} method data method {GET or POST}
 * @param {String} url
 * @param {String|Object} data
 * @param {String|Object} type "Accept" header value {text/xml}
 * @return {Response} response
 */
Http.ajax = function(method, url, data, type) {
    data = data || null;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        /*
         readyState
         0 为初始化——open函数还没调用。
         1 正在加载——open函数已调用，但send函数没有调用。
         2 已加载  ——send函数已调用。
         3 正在交互——服务器正在发送响应。
         4 完成    ——服务器完成发送响应。
         status
         404:“Not Found”
         403:“Forbidden”
         500:“Internal Server Error”
         200:“OK”这个最常用
         304:“Not Modified”   opera浏览器有时返回304
         data://www.trylife.cn/ajaxxmlhttprequest-readystate-status/
         */
        if(request.readyState == 4) {
            if(request.status == 200 || request.status == 304){
                if(request.onData) request.onData(request.responseText);
            }else{
                if(request.onError) request.onError(request.status);
            }
        }
    }
    request.open(method, url, asyn);
    /*
     *  data header
     *  data://en.wikipedia.org/wiki/List_of_HTTP_headers#Requests
     */
    if (type) {
        request.setRequestHeader("Accept", type);
    }
    if (data instanceof Object) {
        data = JSON.stringify(data);
        //data://en.wikipedia.org/wiki/Mime_type
        request.setRequestHeader('Content-Type', 'application/json');
    }
    //request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.send(data);
    return request;
};

/**
 * Make data GET request to server-side
 * @param {String} url
 */
Http.get = function(url) {
    return Http.ajax('GET', url);
};

/**
 * Make data POST request to server-side
 * @param {String} url
 * @param {String|Object} data
 * @param {String|Object} type "Accept" header value
 * @returns {request}
 */
Http.post = function(url, data, type) {
    return Http.ajax('POST', url, data, type);
};

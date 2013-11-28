/**
 * Author：Ravior.
 */

puremvc.define
(
    // CLASS INFO
    {
        name:'app.proxy.DataService'
    },

    // INSTANCE MEMBERS
    {
        facade:null,

        /**
         * @param {string} 服务名称，url
         * @param {object}  参数
         * @param {string}    类型 default 'post'
         * @param {function}
         * @param {object}
         * @return {void}
         */
        getService:function (url, param, type, handler, target, hideLoading, error) {
            var request;
            if (type == "get") {
                url += "?";
                if (param) {
                    var p = "";
                    for (var t in param) p += t + "=" + param[t] + "&";
                    url += p;
                }
                url += "r=" + Math.random();
                request = Http.get(url);
            } else {
                url += "?r=" + Math.random();
                request = Http.post(url, param);
            }

            request.onData = ClassUtils.delegate(this, this.onComplete, handler, target);
            request.onError = ClassUtils.delegate(this, this.onError, handler, target);
            this.error = error;

        },

        /**
         * 正确返回数据，默认执行onComplete方法
         * @param data
         */
        onComplete:function (result, handler, target) {
            var data;
            try {
                data = JSON.parse(result);
            } catch (e) {
                var str = result.split('\n');
                cc.log("error:"+str[0]);
                return;
            }
            //主数据
            if (handler != null) {
                //执行handler回调方法
                handler.call(target, data);
            } else if (target.onComplete != null) {
                //执行缺省的回调方法
                target.onComplete.call(target, data);
            }

        },

        onError:function (status, handler, target) {
            //触发指定对象的错误事件
            if (target.onError) target.onError.call(target, status);
            if(this.error) {
                if (target.onComplete != null) {
                    //执行缺省的回调方法
                    target.onComplete.call(target, null);
                }
            }
        }
    },

    // CLASS MEMBERS
    {
        /**
         * The proxy's name.
         * @static
         * @type {string}
         */
        _instance:null,

        getInstance:function () {
            var self = app.proxy.DataService;
            if (self._instance == null)self._instance = new app.proxy.DataService();
            return self._instance;
        }
    }
);
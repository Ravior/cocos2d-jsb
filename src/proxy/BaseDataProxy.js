/**
 * Author：Ravior
 * Proxy基础类，大部分数据请求Proxy继承与该类
 */
puremvc.define
    (
        // CLASS INFO
        {
            name:'app.proxy.BaseDataProxy',
            parent:puremvc.Proxy,

            constructor:function () {
                puremvc.Proxy.call(this);
                this.dataService = app.proxy.DataService.getInstance();
            }
        },

        // INSTANCE MEMBERS
        {
            /**
             * @param {string} 服务名称，url
             * @param {object}  参数
             */
            getService:function (url, param, type, handler, hideLoading, error) {
                this.dataService.getService(url, param, type, handler, this, hideLoading, error);
            },


            /**
             * 请求完成事件,请覆盖
             */
            onComplete:function (data) {
            },


            /**
             * 错误处理，如果不需要单独做错误处理，可去掉
             * @param status
             */
            onError:function (status) {
            }
        },

        // CLASS MEMBERS	
        {
            NAME:'BaseDataProxy'
        }
    );
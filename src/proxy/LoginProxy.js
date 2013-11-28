/**
 * Author：Ravior.
 * Des: 登陆数据处理模块
 */
puremvc.define
(
    // CLASS INFO
    {
        name:'app.proxy.LoginProxy',
        parent:app.proxy.BaseDataProxy
    },

    // INSTANCE MEMBERS
    {
        /**
         * 登陆
         * @param {string} text
         * @return {void}
         */
        login:function (name,password,handler) {
            this.complteHandler = handler;
            var param = {name:name,passwod:password};
            this.getService(app.getServiceURL() + "login/process", param, "post", this.loginComplete);

        },
        /*
        * 登陆请求回调函数
         */
        loginComplete:function(data){
            this.sendNotification(app.Proxy.LoginProxy.COMPLETE,data.code);
        }
    },

    // CLASS MEMBERS
    {
        /**
         * The proxy's name.
         *
         * @static
         * @type {string}
         */
        NAME:'LoginProxy',

        /**
         * All notification
         */
        COMPLETE:'Login_Complete'
    }
);
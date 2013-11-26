/**
 * @author Ravior
 */
puremvc.define(
    // CLASS INFO
    {
        name:'app.GameFacade',
        parent:puremvc.Facade
    },

    // INSTANCE MEMBERS
    {
        /**
         * A convenience method to start the PureMVC apparatus
         *
         * @return {void}
         */
        startup:function () {
            if (!this.initialized) {
                this.initialized = true;
                cc.log("GameFacade StartUp");

                //注册，将Command类与Notification相关联
                this.registerCommand(app.command.CommandType.START_UP, app.command.StartUpCommand);

                //发送Notification，初始化
                this.sendNotification(app.command.CommandType.START_UP);
            }
        }
    },

    // STATIC MEMBERS
    {
        /**
         * Retrieve an instance of ApplicationFacade. If one has not yet been
         * instantiated, one will be created for you.
         *
         * @static
         * @param {string} multitonKey
         * @return demo.ApplicationFacade
         */
        getInstance:function (multitonKey) {
            var instanceMap = puremvc.Facade.instanceMap;
            // read from the instance map
            instance = instanceMap[multitonKey];

            // if there is an instance, return it
            if (instance)
                return instance;

            // otherwise create a new instance and cache it on Facade.instanceMap;
            return instanceMap[multitonKey] = new app.GameFacade(multitonKey);
        },

        /**
         * @static
         * @type {string}
         */
        NAME:'GameFacade'
    }
)
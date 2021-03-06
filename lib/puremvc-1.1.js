(function (n) {
    function i(a, d) {
        this.setNotifyMethod(a);
        this.setNotifyContext(d)
    }

    function j(a, d, b) {
        this.name = a;
        this.body = d;
        this.type = b
    }

    function k() {
    }

    function m() {
    }

    function l() {
        this.subCommands = [];
        this.initializeMacroCommand()
    }

    function g(a, d) {
        this.mediatorName = a || this.constructor.NAME;
        this.viewComponent = d
    }

    function h(a, d) {
        this.proxyName = a || this.constructor.NAME;
        null != d && this.setData(d)
    }

    function b(a) {
        if (null != b.instanceMap[a])throw Error(b.MULTITON_MSG);
        this.initializeNotifier(a);
        b.instanceMap[a] = this;
        this.initializeFacade()
    }

    function c(a) {
        if (null != c.instanceMap[a])throw Error(c.MULTITON_MSG);
        this.multitonKey = a;
        c.instanceMap[this.multitonKey] = this;
        this.mediatorMap = [];
        this.observerMap = [];
        this.initializeView()
    }

    function e(a) {
        if (e.instanceMap[a])throw Error(e.MULTITON_MSG);
        this.multitonKey = a;
        e.instanceMap[a] = this;
        this.proxyMap = [];
        this.initializeModel()
    }

    function f(a) {
        if (null != f.instanceMap[a])throw Error(f.MULTITON_MSG);
        this.multitonKey = a;
        f.instanceMap[this.multitonKey] = this;
        this.commandMap = [];
        this.initializeController()
    }

    function p(a, d, b) {
        for (var a = a.split("."), b = b || o.global, c, e, f = 0, g = a.length; f < g; f++)c = b, e = a[f], b = null == b[e] ? b[e] = {} : b[e];
        return null == d ? b : c[e] = d
    }

    null == n && (n = window);
    if (!n.puremvc) {
        i.prototype.setNotifyMethod = function (a) {
            this.notify = a
        };
        i.prototype.setNotifyContext = function (a) {
            this.context = a
        };
        i.prototype.getNotifyMethod = function () {
            return this.notify
        };
        i.prototype.getNotifyContext = function () {
            return this.context
        };
        i.prototype.notifyObserver = function (a) {
            this.getNotifyMethod().call(this.getNotifyContext(),
                a)
        };
        i.prototype.compareNotifyContext = function (a) {
            return a === this.context
        };
        i.prototype.notify = null;
        i.prototype.context = null;
        j.prototype.getName = function () {
            return this.name
        };
        j.prototype.setBody = function (a) {
            this.body = a
        };
        j.prototype.getBody = function () {
            return this.body
        };
        j.prototype.setType = function (a) {
            this.type = a
        };
        j.prototype.getType = function () {
            return this.type
        };
        j.prototype.toString = function () {
            var a = "Notification Name: " + this.getName(), a = a + ("\nBody:" + (null == this.body ? "null" : this.body.toString()));
            return a +=
                "\nType:" + (null == this.type ? "null" : this.type)
        };
        j.prototype.name = null;
        j.prototype.type = null;
        j.prototype.body = null;
        k.prototype.sendNotification = function (a, d, b) {
            var c = this.getFacade();
            c && c.sendNotification(a, d, b)
        };
        k.prototype.initializeNotifier = function (a) {
            this.multitonKey = "" + a;
            this.facade = this.getFacade()
        };
        k.prototype.getFacade = function () {
            if (null == this.multitonKey)throw Error(k.MULTITON_MSG);
            return b.getInstance(this.multitonKey)
        };
        k.prototype.multitonKey = null;
        k.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
        m.prototype = new k;
        m.prototype.constructor = m;
        m.prototype.execute = function () {
        };
        l.prototype = new k;
        l.prototype.constructor = l;
        l.prototype.subCommands = null;
        l.prototype.initializeMacroCommand = function () {
        };
        l.prototype.addSubCommand = function (a) {
            this.subCommands.push(a)
        };
        l.prototype.execute = function (a) {
            for (; 0 < this.subCommands.length;) {
                var d = new (this.subCommands.shift());
                d.initializeNotifier(this.multitonKey);
                d.execute(a)
            }
        };
        g.NAME = "Mediator";
        g.prototype = new k;
        g.prototype.constructor = g;
        g.prototype.getMediatorName =
            function () {
                return this.mediatorName
            };
        g.prototype.setViewComponent = function (a) {
            this.viewComponent = a
        };
        g.prototype.getViewComponent = function () {
            return this.viewComponent
        };
        g.prototype.listNotificationInterests = function () {
            return[]
        };
        g.prototype.handleNotification = function () {
        };
        g.prototype.onRegister = function () {
        };
        g.prototype.onRemove = function () {
        };
        g.prototype.mediatorName = null;
        g.prototype.viewComponent = null;
        h.NAME = "Proxy";
        h.prototype = new k;
        h.prototype.constructor = h;
        h.prototype.getProxyName = function () {
            return this.proxyName
        };
        h.prototype.setData = function (a) {
            this.data = a
        };
        h.prototype.getData = function () {
            return this.data
        };
        h.prototype.onRegister = function () {
        };
        h.prototype.onRemove = function () {
        };
        h.prototype.proxyName = null;
        h.prototype.data = null;
        b.prototype.initializeFacade = function () {
            this.initializeModel();
            this.initializeController();
            this.initializeView()
        };
        b.getInstance = function (a) {
            if (null == a)return null;
            null == b.instanceMap[a] && (b.instanceMap[a] = new b(a));
            return b.instanceMap[a]
        };
        b.prototype.initializeController = function () {
            if (null ==
                this.controller)this.controller = f.getInstance(this.multitonKey)
        };
        b.prototype.initializeModel = function () {
            if (null == this.model)this.model = e.getInstance(this.multitonKey)
        };
        b.prototype.initializeView = function () {
            if (null == this.view)this.view = c.getInstance(this.multitonKey)
        };
        b.prototype.registerCommand = function (a, d) {
            this.controller.registerCommand(a, d)
        };
        b.prototype.removeCommand = function (a) {
            this.controller.removeCommand(a)
        };
        b.prototype.hasCommand = function (a) {
            return this.controller.hasCommand(a)
        };
        b.prototype.registerProxy =
            function (a) {
                this.model.registerProxy(a)
            };
        b.prototype.retrieveProxy = function (a) {
            return this.model.retrieveProxy(a)
        };
        b.prototype.removeProxy = function (a) {
            var d = null;
            null != this.model && (d = this.model.removeProxy(a));
            return d
        };
        b.prototype.hasProxy = function (a) {
            return this.model.hasProxy(a)
        };
        b.prototype.registerMediator = function (a) {
            null != this.view && this.view.registerMediator(a)
        };
        b.prototype.retrieveMediator = function (a) {
            return this.view.retrieveMediator(a)
        };
        b.prototype.removeMediator = function (a) {
            var d = null;
            null != this.view && (d = this.view.removeMediator(a));
            return d
        };
        b.prototype.hasMediator = function (a) {
            return this.view.hasMediator(a)
        };
        b.prototype.sendNotification = function (a, d, b) {
            this.notifyObservers(new j(a, d, b))
        };
        b.prototype.notifyObservers = function (a) {
            null != this.view && this.view.notifyObservers(a)
        };
        b.prototype.initializeNotifier = function (a) {
            this.multitonKey = a
        };
        b.hasCore = function (a) {
            return null != b.instanceMap[a]
        };
        b.removeCore = function (a) {
            null != b.instanceMap[a] && (e.removeModel(a), c.removeView(a), f.removeController(a),
                delete b.instanceMap[a])
        };
        b.prototype.controller = null;
        b.prototype.model = null;
        b.prototype.view = null;
        b.prototype.multitonKey = null;
        b.instanceMap = [];
        b.MULTITON_MSG = "Facade instance for this Multiton key already constructed!";
        c.prototype.initializeView = function () {
        };
        c.getInstance = function (a) {
            if (null == a)return null;
            null == c.instanceMap[a] && (c.instanceMap[a] = new c(a));
            return c.instanceMap[a]
        };
        c.prototype.registerObserver = function (a, d) {
            null != this.observerMap[a] ? this.observerMap[a].push(d) : this.observerMap[a] =
                [d]
        };
        c.prototype.notifyObservers = function (a) {
            if (null != this.observerMap[a.getName()]) {
                for (var d = this.observerMap[a.getName()], b = [], c, e = 0; e < d.length; e++)c = d[e], b.push(c);
                for (e = 0; e < b.length; e++)c = b[e], c.notifyObserver(a)
            }
        };
        c.prototype.removeObserver = function (a, d) {
            for (var b = this.observerMap[a], c = 0; c < b.length; c++)if (!0 == b[c].compareNotifyContext(d)) {
                b.splice(c, 1);
                break
            }
            0 == b.length && delete this.observerMap[a]
        };
        c.prototype.registerMediator = function (a) {
            if (null == this.mediatorMap[a.getMediatorName()]) {
                a.initializeNotifier(this.multitonKey);
                this.mediatorMap[a.getMediatorName()] = a;
                var d = a.listNotificationInterests();
                if (0 < d.length)for (var b = new i(a.handleNotification, a), c = 0; c < d.length; c++)this.registerObserver(d[c], b);
                a.onRegister()
            }
        };
        c.prototype.retrieveMediator = function (a) {
            return this.mediatorMap[a]
        };
        c.prototype.removeMediator = function (a) {
            var d = this.mediatorMap[a];
            if (d) {
                for (var b = d.listNotificationInterests(), c = 0; c < b.length; c++)this.removeObserver(b[c], d);
                delete this.mediatorMap[a];
                d.onRemove()
            }
            return d
        };
        c.prototype.hasMediator = function (a) {
            return null !=
                this.mediatorMap[a]
        };
        c.removeView = function (a) {
            delete c.instanceMap[a]
        };
        c.prototype.mediatorMap = null;
        c.prototype.observerMap = null;
        c.instanceMap = [];
        c.prototype.multitonKey = null;
        c.MULTITON_MSG = "View instance for this Multiton key already constructed!";
        e.prototype.initializeModel = function () {
        };
        e.getInstance = function (a) {
            if (null == a)return null;
            null == e.instanceMap[a] && (e.instanceMap[a] = new e(a));
            return e.instanceMap[a]
        };
        e.prototype.registerProxy = function (a) {
            a.initializeNotifier(this.multitonKey);
            this.proxyMap[a.getProxyName()] =
                a;
            a.onRegister()
        };
        e.prototype.retrieveProxy = function (a) {
            return this.proxyMap[a]
        };
        e.prototype.hasProxy = function (a) {
            return null != this.proxyMap[a]
        };
        e.prototype.removeProxy = function (a) {
            var b = this.proxyMap[a];
            b && (this.proxyMap[a] = null, b.onRemove());
            return b
        };
        e.removeModel = function (a) {
            delete e.instanceMap[a]
        };
        e.prototype.proxyMap = null;
        e.instanceMap = [];
        e.MULTITON_MSG = "Model instance for this Multiton key already constructed!";
        f.prototype.initializeController = function () {
            this.view = c.getInstance(this.multitonKey)
        };
        f.getInstance = function (a) {
            if (null == a)return null;
            null == this.instanceMap[a] && (this.instanceMap[a] = new this(a));
            return this.instanceMap[a]
        };
        f.prototype.executeCommand = function (a) {
            var b = this.commandMap[a.getName()];
            null != b && (b = new b, b.initializeNotifier(this.multitonKey), b.execute(a))
        };
        f.prototype.registerCommand = function (a, b) {
            null == this.commandMap[a] && this.view.registerObserver(a, new i(this.executeCommand, this));
            this.commandMap[a] = b
        };
        f.prototype.hasCommand = function (a) {
            return null != this.commandMap[a]
        };
        f.prototype.removeCommand = function (a) {
            this.hasCommand(a) && (this.view.removeObserver(a, this), this.commandMap[a] = null)
        };
        f.removeController = function (a) {
            delete this.instanceMap[a]
        };
        f.prototype.view = null;
        f.prototype.commandMap = null;
        f.prototype.multitonKey = null;
        f.instanceMap = [];
        f.MULTITON_MSG = "controller key for this Multiton key already constructed";
        var o = {global:function () {
            return this
        }(), extend:function (a, b) {
            if ("function" !== typeof a)throw new TypeError("#extend- child should be Function");
            if ("function" !==
                typeof b)throw new TypeError("#extend- parent should be Function");
            if (b !== a) {
                var c = new Function;
                c.prototype = b.prototype;
                a.prototype = new c;
                return a.prototype.constructor = a
            }
        }, decorate:function (a, b) {
            for (var c in b)a[c] = b[c];
            return a
        }};
        n.puremvc = {View:c, Model:e, Controller:f, SimpleCommand:m, MacroCommand:l, Facade:b, Mediator:g, Observer:i, Notification:j, Notifier:k, Proxy:h, define:function (a, b, c) {
            a || (a = {});
            var e = a.name, f = a.parent, g = "function" === typeof f, h = a.scope || null;
            if ("parent"in a && !g)throw new TypeError("Class parent must be Function");
            if (a.hasOwnProperty("constructor")) {
                if (a = a.constructor, "function" !== typeof a)throw new TypeError("Class constructor must be Function");
            } else a = g ? function () {
                f.apply(this, arguments)
            } : new Function;
            g && o.extend(a, f);
            if (b)g = a.prototype, o.decorate(g, b), g.constructor = a;
            c && o.decorate(a, c);
            if (e) {
                if ("string" !== typeof e)throw new TypeError("Class name must be primitive string");
                p(e, a, h)
            }
            return a
        }, declare:p}
    }
})(this);
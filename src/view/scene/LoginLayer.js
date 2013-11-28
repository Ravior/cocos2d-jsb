/**
 * User: Ravior
 * Dec:账户登陆Layer
 */

var LoginLayer = cc.Layer.extend({
    // private
    nameBox:null,
    passwdBox:null,
    ctor:function() {
        this._super();
        cc.associateWithNative( this, cc.Layer );
    },

    init:function () {
        // 1. super init first
        this._super();

        /////////////////////////////
        var size = cc.Director.getInstance().getWinSize();

        // 主背景
        var bg = cc.Sprite.create(s_StartBackground);
        bg.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg);

        // get server list
        // remote connection...
        // update check
        // this.updateServer
        game.server = {name:'双线一服', host:'http://sj108test.96pk.com:9191/'};   // default server
        game.servers = [
            {name:'双线一服',host:'http://sj108test.96pk.com:9191/'}
        ];

        var accountString = app.GameData.storage.getItem('account') || '{}';
        var account = JSON.parse(accountString);
        var username = typeof(account.u) != 'undefined' ? (account.u || '') : '';
        var password = typeof(account.p) != 'undefined' ? (account.p || '') : '';

        //用户名输入框
        this.nameBox = cc.EditBox.create(cc.size(300, 40), cc.Scale9Sprite.create(s_EditBox));
        this.nameBox.setPlaceholderFontColor(cc.c3b(255, 0, 0));
        this.nameBox.setPlaceHolder("帐号:");
        this.nameBox.setFontColor(cc.c3b(0, 0, 0));
        this.nameBox.setMaxLength(32);
        this.nameBox.setPosition(cc.p(size.width / 2, size.height / 2 + 300));
        this.nameBox.setText(username);
        this.nameBox.setDelegate(this);
        this.addChild(this.nameBox);


        //密码输入框
        this.passwdBox = cc.EditBox.create(cc.size(300, 40), cc.Scale9Sprite.create(s_EditBox));
        this.passwdBox.setPlaceholderFontColor(cc.c3b(255, 0, 0));
        this.passwdBox.setPlaceHolder("密码:");
        this.passwdBox.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
        this.passwdBox.setFontColor(cc.c3b(0, 0, 0));
        this.passwdBox.setMaxLength(32);
        this.passwdBox.setPosition(cc.p(size.width / 2, size.height / 2 + 240));
        this.passwdBox.setText(password);
        this.passwdBox.setDelegate(this);
        this.addChild(this.passwdBox);

        //登陆游戏按钮
        var label = cc.LabelTTF.create("登陆游戏", app.Config.font.family, app.Config.font.xlarge);
        label.setColor(cc.c3b(255, 238, 1));
        var item = cc.MenuItemLabel.create(label, this.onLogin, this);
        item.setPosition(cc.p(size.width / 2, size.height / 2 - 475));

        this.menu = cc.Menu.create(item);
        this.menu.setPosition(cc.p(0, 0));
        this.addChild(this.menu);

        return true;
    },

    //登陆按钮回调函数
    onLogin:function(pSender) {
        var username = this.nameBox.getText();
        var password = this.passwdBox.getText();
        var data={"username":username,"password":password};
        this.dispatchEvent({type:LoginLayer.Login,target:this,data:data});
    }
});
ClassUtils['extends'](LoginLayer, EventDispatcher);
//Static members
LoginLayer.Login="Login";
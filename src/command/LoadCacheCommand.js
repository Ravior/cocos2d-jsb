/**
 * User: zhoufei
 * Class: 加载主场景资源文件及公用资源文件
 */
puremvc.define(
    //CLASS INFO
    {
        name:'app.command.LoadCacheCommand',
        parent:puremvc.AsyncCommand
    },
    //INSTANCE MEMBERS
    {
        /** @override */
        execute:function (note) {
            cc.log('LoadCacheCommand execute');
            var cache = cc.SpriteFrameCache.getInstance();
            cache.addSpriteFrames(ui_loading_plist, ui_loading);
            cache.addSpriteFrames(ui_main_plist, ui_main);
            cache.addSpriteFrames(ui_avatar_plist, ui_avatar);
            cache.addSpriteFrames(ui_avatar_big_plist, ui_avatar_big);
            cache.addSpriteFrames(res_fonts_plist, res_fonts);
            cache.addSpriteFrames(ui_story_plist, ui_story);
            cache.addSpriteFrames(ui_upgrade_plist, ui_upgrade);
            // 加载副本资源
            cache.addSpriteFrames(animate_instance_plist, animate_instance);
            // 技能
            cache.addSpriteFrames(skill_aoshu_plist, skill_aoshu);
            cache.addSpriteFrames(skill_baofengxue_plist, skill_baofengxue);
            cache.addSpriteFrames(skill_chuancisheji_plist, skill_chuancisheji);
            cache.addSpriteFrames(skill_dahuifu_plist, skill_dahuifu);
            cache.addSpriteFrames(skill_duochongsheji_plist, skill_duochongsheji);
            cache.addSpriteFrames(skill_heisexuanfeng_plist, skill_heisexuanfeng);
            cache.addSpriteFrames(skill_huanyingji_plist, skill_huanyingji);
            cache.addSpriteFrames(skill_huikan_plist, skill_huikan);
            cache.addSpriteFrames(skill_huixuanzhan_plist, skill_huixuanzhan);
            cache.addSpriteFrames(skill_huoyanshu_plist, skill_huoyanshu);
            cache.addSpriteFrames(skill_huoyantuci_plist, skill_huoyantuci);
            cache.addSpriteFrames(skill_lianshe_plist, skill_lianshe);
            cache.addSpriteFrames(skill_quantizhiyu_plist, skill_quantizhiyu);
            cache.addSpriteFrames(skill_sheji_plist, skill_sheji);
            cache.addSpriteFrames(skill_shencai_plist, skill_shencai);
            cache.addSpriteFrames(skill_shenenshu_plist, skill_shenenshu);
            cache.addSpriteFrames(skill_shenyushu_plist, skill_shenyushu);
            cache.addSpriteFrames(skill_shiziji_plist, skill_shiziji);
            cache.addSpriteFrames(skill_taiyangzhienci_plist, skill_taiyangzhienci);
            cache.addSpriteFrames(skill_tianleipo_plist, skill_tianleipo);
            cache.addSpriteFrames(skill_tuji_plist, skill_tuji);
            cache.addSpriteFrames(skill_xiaohuifu_plist, skill_xiaohuifu);
            cache.addSpriteFrames(skill_xieezhanbu_plist, skill_xieezhanbu);
            cache.addSpriteFrames(skill_xunji_plist, skill_xunji);
            cache.addSpriteFrames(skill_zhenkongren_plist, skill_zhenkongren);
            // 角色死亡动画
            cache.addSpriteFrames('res/animate/animate_cards.plist', 'res/animate/animate_cards.png');
            this.onComplete();
        },

        onComplete:function(){
            cc.log('LoadLogoImageCommand complete');
            this.commandComplete();
        }
    }
)

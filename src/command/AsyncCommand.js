/**
 * User: Ravior
 */
puremvc.define(
    //CLASS INFO
    {
        name:'puremvc.AsyncCommand',
        parent:puremvc.SimpleCommand
    },
    //INSTANCE MEMBERS
    {
        macroCommand:null,

        commandComplete:function(){
                this.macroCommand.nextCommand();
        }
    }
)

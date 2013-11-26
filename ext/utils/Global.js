/**
 * User: Ravior
 * Date: 13-11-25
 * Time: 下午4:04
 * Dec:全局公用方法
 */

if(!('indexOf' in Array)){
    Array.prototype.indexOf = function(item){
        for(var i = 0;i<this.length;i++){
            if(this[i] == item){
                return i;
            }
        }
        return -1;
    }
}

//函数委托，在指定的作用域调用某个函数
function delegate(self, func)
{
    var context = self || target;
    if (arguments.length > 2)
    {
        var args = Array.prototype.slice.call(arguments, 2);
        return function()
        {
            //var newArgs = Array.prototype.concat.apply(args, arguments);
            var newArgs = [];
            for(var i = 0; i < arguments.length;i++){
                newArgs.push(arguments[i]);
            }
            newArgs = newArgs.concat(args);
            return func.apply(context, newArgs);
        };
    }else
    {
        return function() {return func.apply(context, arguments);};
    }
};

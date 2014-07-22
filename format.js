var StringFormatter;
var $format;
var __v;

(function(){
    'use strict';

    StringFormatter = function(options){
        var me = this;

        this._compiles = {};

        this.options = options || {
            pattern: /%\{(.+?)\}/g
        }

        this.format = function(format, args){

            if(typeof args === 'function'){
                args = args();
            }

            if(typeof me._compiles[format] === 'undefined'){

                format = format.replace("\r", "\\r").replace("\n", "\\n").replace("'", "\\'").replace('"', '\\"');

                var func = format.replace(me.options.pattern, function(pattern, props){
                    if(typeof args === 'object'){
                        return "' + __v(b." + props + ", b) + '";
                    }else{
                        return "' + __v(" + props + ", "+ props +") + '";
                    }
                });

                //console.log(func);

                me._compiles[format] = new Function("b", "return '"+ func +"'");
            }

            return me._compiles[format](args);
        };
    };

    StringFormatter.string_val = function(val, scope){
        switch(typeof val){
            case 'undefined':
                return ''; break;

            case 'function':
                return StringFormatter.string_val(val.call(scope));
                break;

            case 'object':{
                if(val === null){
                    return "";
                }else{
                    return "{object}";
                }

                break;
            }

            default:
                return val + "";
        }
    };

    __v = StringFormatter.string_val;

    $format = new StringFormatter({
        pattern: /\{\{(.+?)\}\}/g
    }).format;
})();

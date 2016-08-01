/**
 * Array.js
 * @version 1.0.0
 */
(function(){
    var proto = Array.prototype;
    
    if (!proto.indexOf)
        proto.indexOf = function(value){
            for (var i = 0, len = this.length; i < len; ++i) if (this[i]===value) return i;
            return -1;
        };
    
    if ( !proto.forEach )
        proto.forEach = function(fn) {
            for(var i=0, len=this.length; i<len; i++) {
                fn(this[i], i, this);
            }
        };
    
    if ( !proto.map )
        proto.map = function(fn) {
            var a = [];
            for(var i=0, len=this.length; i<len; i++) {
                a.push(fn(this[i], i, this));
            }
            return a;
        };
    
    //chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true
    if (!proto.filter)
        proto.filter = function(fn) {
            var a=[],v;

            for (var i=0, len=this.length; i<len; i++) {
                v = this[i];
                if (fn(v, i, this)) {
                    a.push(v);
                }
            }

            return a;
        };
    
    if ( !proto.unique )
        proto.unique = function() {
            var arr = this;
            return this.filter(function(item, i){
                return arr.indexOf(item) === i;
            });
        };
}());

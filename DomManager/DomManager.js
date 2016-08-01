var DomManager = {};

(function(){
    
    DomManager.Selector = {

        init : function(selector){
            var t, a, c, v1, v2;

            if (typeof value === 'function'){
                t = 'function';
                v1= selector;
            }else{
                c = selector.substr(0,1);

                if (c==='#'){
                    t = 'id';
                    v1 = selector.substr(1);
                }else if (c==='['){
                    t = 'attr';
                    a = selector.substr(1, selector.length-2).split('=');
                    v1= a[0];
                    v2= a[1];
                }else if (c==='.'){
                    t = 'cls';
                    v1= selector.substr(1);
                }else{
                    t = 'elem';
                    v1= selector;
                }
            }   

            return {
                tp: t,
                v1: v1,
                v2: v2
            };
        },

        check: function(element, selector){
            var r;

            if (selector.tp === 'id'){
                r = element.getAttribute('id')===selector.v1;
            }else if (selector.tp === 'attr'){
                r = element.hasAttribute(selector.v1);
                if (r && selector.v2){
                    r = element.getAttribute(selector.v1)===selector.v2;
                }
            }else if (selector.tp==='cls'){
                r = element.className.indexOf(selector.v1)>-1;
            }else if (selector.tp==='function'){ 
                r = selector.v1(element);
            }else{
                r = element.localName === selector.v1;
            }

            return r;
        }
    };

}());
(function(){

    DomManager.Animator = {
        getTransitionDuration: function(element){
            var o = getComputedStyle(element),
                s = o.transitionDuration;

            if (s){
                return Number(s.replace('s','').replace('ms','')) * 1000;
            }

            return 0;
        },

        addClass: function (element, cls, fn) {
            var t, 
                c = element.className + ' ', 
                s = (c.replace(cls + ' ', '').trim() + ' ' + cls).trim();
            
            if (fn) {
                
                element.className += (' ' + cls + '-add');
                
                setTimeout(function () {
                    element.className = s;
                    t = DomManager.Animator.getTransitionDuration(element);
                    
                    setTimeout(function () {
                        fn();
                    }, t);
                }, 10);
            }
            else {
                element.className = s;
            }

            return this;
        },

        removeClass: function (element, cls, fn) {
            var t, 
                c = element.className + ' ', 
                s = (c.replace(cls + ' ', '')).trim();

            if (fn) {
                
                element.className += (' ' + cls + '-remove');
                
                setTimeout(function () {
                    t = DomManager.Animator.getTransitionDuration(element);
                    
                    element.className = s;
                    
                    setTimeout(function () {
                        fn();
                    }, t);
                }, 10);
            }
            else {
                element.className = s;
            }

            return this;
        }
    };

}());
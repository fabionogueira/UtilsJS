(function(){

    DomManager.Css = {
        addClass: function (element, cls) {
            var c = element.className + ' ', 
                s = (c.replace(cls + ' ', '') + ' ' + cls).trim();

            element.className = s;

            return this;
        },

        removeClass: function (element, cls) {
            var c = element.className + ' ', 
                s = (c.replace(cls + ' ', '')).trim();

            element.className = s;

            return this;
        },

        style: function(element, definition){
            for (var i in definition){
                element.style[i] = definition[i];
            }

            return this;
        }
    };

}());
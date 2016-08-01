(function(){

    DomManager.closet = function(element, selector){
        var s = this.Selector.init(selector);
        
        while (element && element.getAttribute){
            if (this.Selector.check(element, s)){
                return element;
            }

            element = element.parentNode;
        }
        return null;
    };

}());
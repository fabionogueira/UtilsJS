(function(){

    DomManager.find = function(element, selector){
        var i, c, e, s, children;

        s       = this.Selector.init(selector),
        children= element.childNodes;

        for (i=0; i<children.length; i++){
            c = children[i];
            if (c.getAttribute){
                if (this.Selector.check(c, s)){
                    return angular.element(c);
                }

                e = this.find(c, selector);

                if (e){
                    return e;
                }
            }
        }

        return null;
    };

}());
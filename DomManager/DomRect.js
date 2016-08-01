(function(){

    DomManager.rect = function(element){
        var h, r;

        if (!element){
            r = {top:0,left:0,width:0,height:0};
            h = 0;
        }else {
            
            if (element===document || element===document.body || element===window){
                var D = document;

                r = D.body.getBoundingClientRect();
                h = Math.max(
                    D.body.scrollHeight, D.documentElement.scrollHeight,
                    D.body.offsetHeight, D.documentElement.offsetHeight,
                    D.body.clientHeight, D.documentElement.clientHeight
                );
            }else{
                r = element.getBoundingClientRect();
                h = r.height;
            }
        }
        
        return {
            top: r.top,
            left: r.left,
            width: r.width,
            height: h
        };
    };

}());
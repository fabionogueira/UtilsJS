Type.isObject = function(value){
    // http://jsperf.com/isobject4
    return value !== null && typeof value === 'object';
}
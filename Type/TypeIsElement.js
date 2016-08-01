Type.isElement = function isElement(node) {
    return !!(node &&
        (node.nodeName  // We are a direct element.
        || (node.prop && node.attr && node.find)));  // We have an on and find method part of jQuery API.
};
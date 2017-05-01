"use strict";

(function codenautasModuleDefinition(root, name, factory) {
    /* global define */
    /* istanbul ignore next */
    if(typeof root.globalModuleName !== 'string'){
        root.globalModuleName = name;
    }
    /* istanbul ignore next */
    if(typeof exports === 'object' && typeof module === 'object'){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else if(typeof exports === 'object'){
        exports[root.globalModuleName] = factory();
    }else{
        root[root.globalModuleName] = factory();
    }
    root.globalModuleName = null;
})(/*jshint -W040 */this, 'LazySome', function() {
/*jshint +W040 */

/*jshint -W004 */
var LazySome = {};
/*jshint +W004 */

/*jshint -W034*/

/*eslint no-void: 0*/

// based in: 
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
// obtained https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some?v=example
//   in 2017-04-30 17:23 GMT-03
function lazySome(fun/*, thisArg*/) {
    "use strict";

    if (this == null) {
        throw new TypeError('Array.prototype.lazySome called on null or undefined');
    }

    if (typeof fun !== 'function') {
        throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
        var obtainedReturn = i in t && fun.call(thisArg, t[i], i, t);
        if (obtainedReturn) {
            return obtainedReturn;
        }
    }

    return false;
}

LazySome.bindToPrototypeIn = function(arrayGlobalObject){
    if(arrayGlobalObject!==Array){
        console.log('First parameter of lazy-some.js Must be Array');
        console.log('This is a global object');
        throw new Error('First param Must be Array');
    }
    /*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
    if (!Array.prototype.lazySome) {
        Array.prototype.lazySome = lazySome;
    }
};

return LazySome;

});

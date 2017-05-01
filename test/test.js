"use strict";

var discrepances = require('discrepances');
var LazySome = require('../lazy-some.js');
LazySome.bindToPrototypeIn(Array);

describe("example", function(){
    it("confirm README example", function(){
        var lines=[
            'Line without mail',
            'Line with one mail: name@host.dom',
            'This line is not searches',
            'Another line with mail: other@mail.dom. Not searched'
        ];

        var firstMail=lines.lazySome(function(line){
            var match = line.match(/\w+@(?:\w+\.)+\w+/)
            return match && match[0];
        });

        discrepances.showAndThrow(firstMail, 'name@host.dom');
    });
});

describe("simple", function(){
    [
        {array: [0,2,4], fun: function(x){ return x; }, expect: 2},
        {array: [0,false,null], fun: function(x){ return x; }, expect: false},
    ].forEach(function(fixture){
        it("fixture: "+fixture.array, function(){
            discrepances.showAndThrow(fixture.array.lazySome(fixture.fun), fixture.expect);
        });
    });
});

describe("multiargs", function(){
    [
        {this:null, args: [function(x){ return x; }], expect: TypeError("Array.prototype.lazySome called on null or undefined")},
        {this:['no fun'], args: [], expect: TypeError()},
        {this:['a', 'b', 'c'], args: [function(x){ return this[x];}, {c:42}], expect: 42},
    ].forEach(function(fixture){
        it("fixture: "+fixture.this, function(){
            var obt;
            try{
                obt=Array.prototype.lazySome.apply(fixture.this, fixture.args);
            }catch(err){
                obt=err;
            }
            discrepances.showAndThrow(obt, fixture.expect);
        });
    });
});

describe("install", function(){
    it("detects no error", function(){
        try{
            LazySome.bindToPrototypeIn();
            throw new Error("expect to throw error");
        }catch(err){
            console.log('ok');
        }
    });
});
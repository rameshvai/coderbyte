var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

console.log(o.propertyIsEnumerable('prop'));   // returns true
console.log(a.propertyIsEnumerable(0));        // returns true


var a = [];
a.propertyIsEnumerable('constructor');         // returns false

function firstConstructor() {
    this.property = 'is not enumerable';
}

firstConstructor.prototype.firstMethod = function() {};

function secondConstructor() {
    this.method = function method() { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = 'is enumerable';

console.log(o.propertyIsEnumerable('arbitraryProperty'));   // returns true
console.log(o.propertyIsEnumerable('method'));              // returns true
console.log(o.propertyIsEnumerable('property'));            // returns false

o.property = 'is enumerable';

console.log(o.propertyIsEnumerable('property'));            // returns true

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iteratable with for-in)
console.log(o.propertyIsEnumerable('prototype'));   // returns false (as of JS 1.8.1/FF3.6)
console.log(o.propertyIsEnumerable('constructor')); // returns false
console.log(o.propertyIsEnumerable('firstMethod')); // returns false

var Obj = require('../isset.js');

var test = Object.create(Obj.nullProxy);

console.log(test.foo.bar.baz);

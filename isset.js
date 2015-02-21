/* run with node --harmony_proxies isset.js */
var Obj = Function();

var nullProxy = Proxy.create({
  get: function(proxy, name) {
    return new Obj();
  }
});

Obj.prototype = nullProxy;

exports.nullProxy = nullProxy;
exports.Obj = Obj;

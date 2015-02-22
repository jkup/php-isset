var Obj = Function();

var isset = Proxy.create({
  get: function(target, name) {
      return target[name] || new Obj();
  }
});

Obj.prototype = isset;

exports.isset = isset;
exports.Obj = Obj;

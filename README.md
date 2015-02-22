# Introducing php-isset

PHP provides null safe checking against objects via it's [isset](http://php.net/manual/en/function.isset.php) method. JavaScript doesn't have this and I always wished it did.

For example, in JavaScript if you:

```js
var foo = {};
if ( foo.bar.baz ) {
    console.log('yay!');
}
```

You will see something like:

> "TypeError: Cannot read property 'baz' of undefined

With this library you'll be able to safely check those properties and if at any point a property doesn't exist it will just return an empty object.

```js
var foo = {};
if ( foo.bar.baz ) {} // returns {}
```

## ES6 Proxies

This library requires [ES6 Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) which are not available yet natively so you'll have to run node with the --harmony_proxies flag.

## Installing php-isset

```js
npm install php-isset
```

## Usage

In your application:

```js
var Obj = require('php-isset');

var test = Object.create(Obj.nullProxy);

console.log(test.foo.bar.baz);

```

And then run with:

```js
node --harmony_proxies app.js
```

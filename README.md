# lazy-some
Lazy Array some. Once fun returns non falsy value, that value is returned and search is suspended


![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![npm-version](https://img.shields.io/npm/v/lazy-some.svg)](https://npmjs.org/package/lazy-some)
[![downloads](https://img.shields.io/npm/dm/lazy-some.svg)](https://npmjs.org/package/lazy-some)
[![build](https://img.shields.io/travis/emilioplatzer/lazy-some/master.svg)](https://travis-ci.org/emilioplatzer/lazy-some)
[![coverage](https://img.shields.io/coveralls/emilioplatzer/lazy-some/master.svg)](https://coveralls.io/r/emilioplatzer/lazy-some)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/lazy-some.svg)](https://codeclimate.com/github/emilioplatzer/lazy-some)
[![dependencies](https://img.shields.io/david/emilioplatzer/lazy-some.svg)](https://david-dm.org/emilioplatzer/lazy-some)
[![qa-control](http://codenautas.com/github/emilioplatzer/lazy-some.svg)](http://codenautas.com/github/emilioplatzer/lazy-some)



language: ![English](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)
also available in:
[![Spanish](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)](LEEME.md)

# Install
```sh
$ npm install lazy-some
```

# Usage
```js
require('lazy-some')(Array);

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

console.log(firstMail); // name@host.dom
```

## arr.lazySome(fun [, thisArg])


Calls `fun` with each array element until a non *falsy* value was obtained.
Then that value was returned by `lazySome`.

If only *falsy* values were obtained then `false` was returned.

## License

[MIT](LICENSE)


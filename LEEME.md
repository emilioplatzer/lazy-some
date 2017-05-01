<!--multilang v0 es:LEEME.md en:README.md -->
# lazy-some
<!--lang:es-->
Similar a la función some de Array, pero solo se ejecuta hasta la función devuelva un valor no nulo y ese valor es retornado
<!--lang:en--]
Lazy Array some. Once fun returns non falsy value, that value is returned and search is suspended

[!--lang:*-->

<!-- cucardas -->
![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![npm-version](https://img.shields.io/npm/v/lazy-some.svg)](https://npmjs.org/package/lazy-some)
[![downloads](https://img.shields.io/npm/dm/lazy-some.svg)](https://npmjs.org/package/lazy-some)
[![build](https://img.shields.io/travis/emilioplatzer/lazy-some/master.svg)](https://travis-ci.org/emilioplatzer/lazy-some)
[![coverage](https://img.shields.io/coveralls/emilioplatzer/lazy-some/master.svg)](https://coveralls.io/r/emilioplatzer/lazy-some)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/lazy-some.svg)](https://codeclimate.com/github/emilioplatzer/lazy-some)
[![dependencies](https://img.shields.io/david/emilioplatzer/lazy-some.svg)](https://david-dm.org/emilioplatzer/lazy-some)
[![qa-control](http://codenautas.com/github/emilioplatzer/lazy-some.svg)](http://codenautas.com/github/emilioplatzer/lazy-some)


<!--multilang buttons-->

idioma: ![castellano](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)
también disponible en:
[![inglés](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)](README.md)

<!--lang:es-->
# Instalación
<!--lang:en--]
# Install
[!--lang:*-->
```sh
$ npm install lazy-some
```

<!--lang:es-->
# Uso
<!--lang:en--]
# Usage
[!--lang:*-->
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

<!--lang:es-->

Llama a la función `fun` con cada uno de los elementos del arreglo hasta que la función devuelva un valor que no se considera `false`.
Ese es el valor devuelto por `lazySome`. 
Una vez encontrado ese valor no se sigue ejecutando para el resto de los elementos del arreglo. 

Si la función nunca devuelve un valor no considerado `false`, `lazySome` devuelve `false`

(no se consideran `false` lo que devuelva `false` con `!valor`. O sea todo lo que no sea `false`, `null`, `0` y `undefined`)

<!--lang:en--]

Calls `fun` with each array element until a non *falsy* value was obtained.
Then that value was returned by `lazySome`. 

If only *falsy* values were obtained then `false` was returned. 

<!--lang:es-->
## Licencia
<!--lang:en--]
## License
[!--lang:*-->

[MIT](LICENSE)


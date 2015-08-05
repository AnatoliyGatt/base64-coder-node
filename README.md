# base64-coder for Node.js

Base64 string encoder/decoder.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

## Installation

`npm install base64-coder-node`

## Usage Example

```javascript
var base64 = require("base64-coder-node")();

console.log(base64.encode("Base64 string encoder/decoder."));
console.log(base64.decode("QmFzZTY0IHN0cmluZyBlbmNvZGVyL2RlY29kZXIu"));

console.log(base64.encode("Base64 string encoder/decoder.", "utf16le"));
console.log(base64.decode("QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A", "utf16le"));
```

***

```javascript
QmFzZTY0IHN0cmluZyBlbmNvZGVyL2RlY29kZXIu
Base64 string encoder/decoder.
QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A
Base64 string encoder/decoder.
```

#### Supported Encodings

- `ascii` - for 7 bit ASCII data only. This encoding method is very fast, and will strip the high bit if set.
- `utf8`(default) - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
- `utf16le` - 2 or 4 bytes, little endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
- `ucs2` - Alias of `utf16le`.
- `base64` - Base64 string encoding.
- `binary` - A way of encoding raw binary data into strings by using only the first 8 bits of each character. This encoding method is deprecated and should be avoided in favor of Buffer objects where possible. This encoding will be removed in future versions of Node.
- `hex` - Encode each byte as two hexadecimal characters.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/base64-coder-node.svg
[npm-url]: https://npmjs.org/package/base64-coder-node
[downloads-image]: https://img.shields.io/npm/dm/base64-coder-node.svg
[downloads-url]: https://npmjs.org/package/base64-coder-node
[license]: https://img.shields.io/npm/l/base64-coder-node.svg
[license-url]: https://github.com/AnatoliyGatt/base64-coder-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/base64-coder-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/base64-coder-node
[npm-statistics-image]: https://nodei.co/npm/base64-coder-node.png?downloads=true&downloadRank=true&stars=true
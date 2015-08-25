# base64-coder for Node.js

Base64 string encoder/decoder.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Dependencies Status][dependencies-status-badge]][dependencies-status-page-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Code Climate Test Coverage Status][code-climate-test-coverage-status-badge]][code-climate-test-coverage-status-page-url]
[![Inch CI Documentation Coverage Status][inch-ci-documentation-coverage-status-badge]][inch-ci-documentation-coverage-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

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

[npm-package-url]: https://npmjs.org/package/base64-coder-node

[npm-package-version-badge]: https://img.shields.io/npm/v/base64-coder-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/base64-coder-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/base64-coder-node.svg?style=flat-square

[dependencies-status-badge]: https://david-dm.org/AnatoliyGatt/base64-coder-node.svg?style=flat-square
[dependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/base64-coder-node#info=dependencies

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/base64-coder-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/base64-coder-node#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/base64-coder-node.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/base64-coder-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/base64-coder-node

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/AnatoliyGatt/base64-coder-node.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/base64-coder-node

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/AnatoliyGatt/base64-coder-node.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/base64-coder-node/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/AnatoliyGatt/base64-coder-node.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/AnatoliyGatt/base64-coder-node

[npm-package-statistics-badge]: https://nodei.co/npm/base64-coder-node.png?downloads=true&downloadRank=true&stars=true
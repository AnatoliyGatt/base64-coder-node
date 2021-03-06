/**
 * @module base64-coder
 * @description Base64 string encoder/decoder.
 * @version 1.0.7
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @constructor
 * @description Initialize instance of Base64Coder with default options.
 * @property {Object} defaultOptions - Default options.
 * @property {String} defaultOptions.encoding - Default encoding.
 */

function Base64Coder() {
    this.defaultOptions = {
        encoding: 'utf8'
    };
}

/**
 * @public
 * @function encode
 * @description Encode string to Base64.
 * @param {String} string - String to encode.
 * @param {String} [encoding=utf8] - Encoding.
 * @returns {String} - Base64 encoded string.
 */

Base64Coder.prototype.encode = function (string, encoding) {
    return new Buffer(string, encoding || this.defaultOptions.encoding).toString('base64');
};

/**
 * @public
 * @function decode
 * @description Decode string from Base64.
 * @param {String} string - String to decode.
 * @param {String} [encoding=utf8] - Encoding.
 * @returns {String} - Base64 decoded string.
 */

Base64Coder.prototype.decode = function (string, encoding) {
    return new Buffer(string, 'base64').toString(encoding || this.defaultOptions.encoding);
};

/**
 * @public
 * @description Expose instance of Base64Coder.
 * @returns {Object} - Instance of Base64Coder.
 */

module.exports = function () {
    return new Base64Coder();
};

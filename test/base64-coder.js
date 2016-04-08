var assert = require('assert');
var base64 = require('../lib/base64-coder')();

describe('base64-coder', function () {
    describe('init', function () {
        var defaultOptions = {};

        before(function () {
            defaultOptions = {
                encoding: 'utf8'
            };
        });

        it('should have correct default request options', function () {
            assert.deepEqual(base64.defaultOptions, defaultOptions, 'default options should have correct initial property values');
        });
    });

    describe('functions', function () {
        describe('#encode()', function () {
            it('should encode string to Base64', function () {
                var base64EncodedString = base64.encode('Base64 string encoder/decoder.');
                var expectedBase64EncodedString = 'QmFzZTY0IHN0cmluZyBlbmNvZGVyL2RlY29kZXIu';
                assert.equal(base64EncodedString, expectedBase64EncodedString, 'string should be encoded to Base64');
            });

            it('should encode string to Base64 with non-utf8 encoding', function () {
                var base64EncodedString = base64.encode('Base64 string encoder/decoder.', 'utf16le');
                var expectedBase64EncodedString = 'QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A';
                assert.equal(base64EncodedString, expectedBase64EncodedString, 'non-utf8 string should be encoded to Base64');
            });

            it('should fail when called with invalid encoding', function () {
                assert.throws(function () {
                    base64.encode('Base64 string encoder/decoder.', 'utf16');
                }, Error);
            });

            it('should not be overridden', function () {
                base64.encode = function () {
                    return '#encode()';
                };

                assert.throws(function () {
                    assert.notEqual(base64.encode(), '#encode()', '#encode() should not be overridden');
                }, Error);
            });
        });

        describe('#decode()', function () {
            it('should decode string from Base64', function () {
                var base64DecodedString = base64.decode('QmFzZTY0IHN0cmluZyBlbmNvZGVyL2RlY29kZXIu');
                var expectedBase64DecodedString = 'Base64 string encoder/decoder.';
                assert.equal(base64DecodedString, expectedBase64DecodedString, 'string should be decoded from Base64');
            });

            it('should decode string from Base64 with non-utf8 encoding', function () {
                var base64DecodedString = base64.decode('QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A', 'utf16le');
                var expectedBase64DecodedString = 'Base64 string encoder/decoder.';
                assert.equal(base64DecodedString, expectedBase64DecodedString, 'non-utf8 string should be decoded from Base64');
            });

            it('should fail when called with invalid encoding', function () {
                assert.throws(function () {
                    base64.decode('QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A', 'utf16');
                }, Error);
            });
        });
    });
});

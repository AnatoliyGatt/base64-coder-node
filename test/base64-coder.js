var assert = require("assert");
var base64 = require("../lib/base64-coder")();

describe("base64-coder", function() {
    describe("init", function() {
        var defaultOptions = {};

        before(function() {
            defaultOptions = {
                encoding: "utf8"
            };
        });

        it("should have correct default request options", function() {
            assert.deepEqual(base64.defaultOptions, defaultOptions, "default options should have correct initial property values");
        });

        it("should not override default options", function() {
            base64.defaultOptions = {
                encoding: "ascii"
            };

            assert.deepEqual(base64.defaultOptions, defaultOptions, "default options should not be overridden");
        });
    });

    describe("functions", function() {
        describe("#encode()", function() {
            it("should encode string to Base64", function() {
                assert.equal(base64.encode("Base64 string encoder/decoder."), "QmFzZTY0IHN0cmluZyBlbmNvZGVyL2RlY29kZXIu", "string should be encoded to Base64");
            });

            it("should encode string to Base64 with non-utf8 encoding", function() {
                assert.equal(base64.encode("Base64 string encoder/decoder.", "utf16le"), "QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A", "non-utf8 string should be encoded to Base64");
            });

            it("should fail when called with invalid encoding", function() {
                assert.throws(function() {
                    base64.encode("Base64 string encoder/decoder.", "utf16");
                }, Error);
            });

            it("should not be overridden", function() {
                base64.encode = function() {
                    return "#encode()";
                };

                assert.throws(function() {
                    assert.notEqual(base64.encode(), "#encode()", "#encode() should not be overridden");
                }, Error);
            });
        });

        describe("#decode()", function() {
            it("should decode string from Base64", function() {
                assert.equal(base64.decode("QmFzZTY0IHN0cmluZyBlbmNvZGVyL2RlY29kZXIu"), "Base64 string encoder/decoder.", "string should be decoded from Base64");
            });

            it("should decode string from Base64 with non-utf8 encoding", function() {
                assert.equal(base64.decode("QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A", "utf16le"), "Base64 string encoder/decoder.", "non-utf8 string should be decoded from Base64");
            });

            it("should fail when called with invalid encoding", function() {
                assert.throws(function() {
                    base64.decode("QgBhAHMAZQA2ADQAIABzAHQAcgBpAG4AZwAgAGUAbgBjAG8AZABlAHIALwBkAGUAYwBvAGQAZQByAC4A", "utf16");
                }, Error);
            });

            it("should not be overridden", function() {
                base64.decode = function() {
                    return "#decode()";
                };

                assert.throws(function() {
                    assert.notEqual(base64.decode(), "#decode()", "#decode() should not be overridden");
                }, Error);
            });
        });
    });
});
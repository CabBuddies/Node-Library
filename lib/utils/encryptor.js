"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encryptor = require("simple-encryptor");
function encrypt(text, key = '6HE4Z385an9b5Jja') {
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).encrypt(text);
}
function decrypt(text, key = '6HE4Z385an9b5Jja') {
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).decrypt(text);
}
exports.default = {
    encrypt,
    decrypt
};

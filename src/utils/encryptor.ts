import * as encryptor from 'simple-encryptor';

function encrypt(text:string,key:string='6HE4Z385an9b5Jja'){
    //@ts-ignore
    return encryptor({
        key,
        hmac: false,
        debug: true
      }).encrypt(text);
}

function decrypt(text:string,key:string='6HE4Z385an9b5Jja'){
    //@ts-ignore
    return encryptor({
        key,
        hmac: false,
        debug: true
      }).decrypt(text);
}

export default {
    encrypt,
    decrypt
}
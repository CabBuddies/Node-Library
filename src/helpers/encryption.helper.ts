// import crypt from 'simple-encryptor';

const crypt = require('simple-encryptor');

//REQUIRES CHANGES
const getKey = (val:string) => {
    return val + ";[9,Tx.YHt+kTxr,"
}

const encryptPassword = function(password:string){
    return crypt(getKey(password)).encrypt(password)
}

const checkPassword = function(encrypted:string,plain:string){
    return crypt(getKey(plain)).decrypt(encrypted) === plain
}

export {
    encryptPassword,
    checkPassword
}
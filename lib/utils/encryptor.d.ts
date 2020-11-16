declare function encrypt(text: string, key?: string): any;
declare function decrypt(text: string, key?: string): any;
declare const _default: {
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
};
export default _default;

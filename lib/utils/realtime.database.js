"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("firebase");
require("firebase/firestore");
class RealtimeDatabase {
    constructor() {
        this.getApp = ({ options }) => {
            if (options) {
                this.app = !firebase_1.default.apps.length
                    ? firebase_1.default.initializeApp(options).firestore().app
                    : firebase_1.default.app().firestore().app;
            }
            return this.app;
        };
        this.getDb = ({ options, url }) => {
            if (url)
                return this.getApp({ options }).database(url);
            return this.getApp({ options }).database();
        };
        this.getPath = ({ options, url, path }) => {
            if (path)
                return this.getDb({ options, url }).ref(path);
            return this.getDb({ options, url }).ref();
        };
        this.pushToPath = ({ options, url, path, value }) => {
            value = value || {};
            return new Promise((resolve, reject) => {
                this.getPath({ options, url, path }).push(value, (error) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                });
            });
        };
        this.observePath = ({ options, url, path, callback }) => {
            callback = callback || ((snapshot) => { });
            this.getPath({ options, url, path }).on('child_added', (snapshot) => {
                callback(snapshot);
            });
        };
    }
}
exports.default = new RealtimeDatabase();

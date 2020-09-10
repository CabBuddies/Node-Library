"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizer = void 0;
class Main {
    constructor() {
        this.subscription = {};
        this.addSubscriberAll = (messageTypes, subscriber) => {
            const topics = [];
            for (const k of Object.keys(messageTypes)) {
                if (typeof messageTypes[k] === typeof 's') {
                    topics.push(messageTypes[k]);
                }
                else {
                    this.addSubscriberAll(messageTypes[k], subscriber);
                }
            }
            for (const t of topics) {
                this.addSubscriber(t, subscriber);
            }
        };
        this.addSubscriber = (messageType, subscriber) => {
            if (messageType in this.subscription === false) {
                this.subscription[messageType] = [];
            }
            this.subscription[messageType].push(subscriber);
        };
        this.removeSubscriber = (messageType, subscriber) => {
            this.subscription[messageType] = this.subscription[messageType].filter(function (value, index, arr) {
                return value != subscriber;
            });
        };
        this.publishMessage = (message) => __awaiter(this, void 0, void 0, function* () {
            console.log('PubSub', message, this.subscription);
            var sub = this.subscription;
            return yield new Promise(function (resolve, reject) {
                return __awaiter(this, void 0, void 0, function* () {
                    const result = [];
                    for (const subscriber of sub[message.type]) {
                        try {
                            result.push(yield subscriber.processMessage(message));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    resolve(result);
                });
            });
        });
    }
}
const Organizer = new Main();
exports.Organizer = Organizer;

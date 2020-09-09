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
        this.addSubscriberAll = (eventTypes, subscriber) => {
            const topics = [];
            for (const k of Object.keys(eventTypes)) {
                if (typeof eventTypes[k] === typeof 's') {
                    topics.push(eventTypes[k]);
                }
                else {
                    this.addSubscriberAll(eventTypes[k], subscriber);
                }
            }
            for (const t of topics) {
                this.addSubscriber(t, subscriber);
            }
        };
        this.addSubscriber = (eventType, subscriber) => {
            if (eventType in this.subscription === false) {
                this.subscription[eventType] = [];
            }
            this.subscription[eventType].push(subscriber);
        };
        this.removeSubscriber = (eventType, subscriber) => {
            this.subscription[eventType] = this.subscription[eventType].filter(function (value, index, arr) {
                return value != subscriber;
            });
        };
        this.publishEvent = (event) => __awaiter(this, void 0, void 0, function* () {
            console.log('PubSub', event, this.subscription);
            var sub = this.subscription;
            return yield new Promise(function (resolve, reject) {
                for (const subscriber of sub[event.type]) {
                    try {
                        subscriber.eventListened(event);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                resolve('done');
            });
        });
    }
}
const Organizer = new Main();
exports.Organizer = Organizer;

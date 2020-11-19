class Main {
    constructor() {
        //HashMap<String,ArrayList<Subscriber>>
        this.subscription = {};
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
        this.publishEvent = async (event) => {
            console.log('PubSub', event, this.subscription);
            var sub = this.subscription;
            return await new Promise(function (resolve, reject) {
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
        };
    }
}
const Organizer = new Main();
export { Organizer };
//# sourceMappingURL=index.js.map
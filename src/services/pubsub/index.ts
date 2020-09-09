import Request from '../../helpers/request.helper';

interface Event{
    request:Request,
    type:string,
    metadata?:any,
    data:any
}

interface Subscriber{
    eventListened(event:Event) : any
}

interface Subscription{
    [key: string]:Subscriber[]
}

class Main{
    
    //HashMap<String,ArrayList<Subscriber>>

    subscription : Subscription = {};

    addSubscriberAll = (eventTypes:any, subscriber:Subscriber) => {
        const topics = [];
        for(const k of Object.keys(eventTypes)){
            if(typeof eventTypes[k] === typeof 's'){
                topics.push(eventTypes[k]);
            }else{
                this.addSubscriberAll(eventTypes[k],subscriber);
            }
        }
        for(const t of topics){
            this.addSubscriber(t,subscriber);
        }
    }

    addSubscriber = (eventType:string, subscriber:Subscriber) => {
        if(eventType in this.subscription === false){
            this.subscription[eventType] = []
        }
        this.subscription[eventType].push(subscriber);
    }

    removeSubscriber = (eventType:string, subscriber:Subscriber) => {
        this.subscription[eventType] = this.subscription[eventType].filter(
            function(value:Subscriber, index, arr){
                return value!=subscriber;
            }
        );
    }

    publishEvent = async(event:Event) => {
        console.log('PubSub',event,this.subscription);
        var sub = this.subscription;
        return await new Promise<string>(function(resolve,reject){
            for(const subscriber of sub[event.type]){
                try {
                    subscriber.eventListened(event)
                } catch (error) {
                    console.log(error)
                }
            }
            resolve('done')
        });
    }

}

const Organizer = new Main();

export {
    Event,
    Subscriber,
    Organizer
}
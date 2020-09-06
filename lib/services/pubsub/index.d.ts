import Request from '../../helpers/request.helper';
interface Event {
    request: Request;
    type: string;
    metadata?: any;
    data: any;
}
interface Subscriber {
    eventListened(event: Event): any;
}
interface Subscription {
    [key: string]: Subscriber[];
}
declare class Main {
    subscription: Subscription;
    addSubscriber: (eventType: string, subscriber: Subscriber) => void;
    removeSubscriber: (eventType: string, subscriber: Subscriber) => void;
    publishEvent: (event: Event) => Promise<string>;
}
declare const Organizer: Main;
export { Event, Subscriber, Organizer };

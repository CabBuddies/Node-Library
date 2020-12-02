import firebase from 'firebase';
import 'firebase/firestore';
interface props {
    options?: any;
    url?: string;
    path?: string;
    value?: any;
    callback?(snapshot: firebase.database.DataSnapshot): any;
}
declare class RealtimeDatabase {
    app: firebase.app.App;
    getApp: ({ options }: props) => firebase.app.App;
    getDb: ({ options, url }: props) => firebase.database.Database;
    getPath: ({ options, url, path }: props) => firebase.database.Reference;
    pushToPath: ({ options, url, path, value }: props) => Promise<unknown>;
    observePath: ({ options, url, path, callback }: props) => void;
}
declare const _default: RealtimeDatabase;
export default _default;

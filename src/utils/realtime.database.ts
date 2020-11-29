import firebase from 'firebase';
import 'firebase/firestore';

interface props{
    options?:any,
    url?:string,
    path?:string,
    value?:any,
    callback?:Function
}

class RealtimeDatabase{
    app:firebase.app.App;

    getApp = ({options}:props) => {
        //console.log({});
        if(options){
            this.app = !firebase.apps.length 
                        ? firebase.initializeApp(options).firestore().app
                        : firebase.app().firestore().app;
        }
        return this.app;
    }

    getDb = ({options,url}:props) => {
        //console.log({url});
        if(url)
            return this.getApp({options}).database(url);
        return this.getApp({options}).database();
    }

    getPath = ({options,url,path}:props) => {
        //console.log({url,path});
        if(path)
            return this.getDb({options,url}).ref(path);
        return this.getDb({options,url}).ref();
    }

    pushToPath = ({options,url,path,value}:props) => {
        //console.log({url,path,value});
        value = value||{};
        
        return new Promise((resolve,reject)=>{
            this.getPath({options,url,path}).push(value,(error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve()
                }
            });
        })
    }

    observePath = ({options,url,path,callback}:props) => {
        callback = callback||(()=>{});
        
        this.getPath({options,url,path}).on('child_added',(snapshot)=>{
            callback(snapshot.val());
        })
    }
}

export default new RealtimeDatabase();
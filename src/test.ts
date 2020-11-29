import RealtimeDatabase from './utils/realtime.database';

const options = {
    apiKey: "AIzaSyDl4dmvk0tBIX0-BWCaOZy0MjAcTtLHo60",
    authDomain: "cabbuddies-1562982601192.firebaseapp.com",
    databaseURL: "https://cabbuddies-1562982601192.firebaseio.com",
    projectId: "cabbuddies-1562982601192",
    storageBucket: "cabbuddies-1562982601192.appspot.com",
    messagingSenderId: "1067716858916",
    appId: "1:1067716858916:web:298c461c0439c497d5b4b1",
    measurementId: "G-VQLJ1DMMJ5"
};

RealtimeDatabase.getApp({options});



setInterval(()=>{
    RealtimeDatabase.pushToPath({
        path:'/user/karthik',
        value:{
            user:'karthik',
            time:new Date().getTime()
        }
    });   
},1000);
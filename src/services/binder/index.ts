class Main{

    //HashMap<String,Runnable> 

    bound : {[key:string]:Function} = {};

    bindFunction = (name:string,func:Function) => {
        this.bound[name] = func;
    }

    boundFunction = (name:string) => {
        return this.bound[name];
    }
}

const Binder = new Main();

export default Binder;
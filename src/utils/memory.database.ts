class Collection{
    private data:Record<string,any>;

    constructor(){
        this.data={};
    }

    putItem(key:string,value:any){
        this.data[key] = value;
        return this.data[key];
    }

    getItem(key:string){
        return this.data[key];
    }

    deleteItem(key:string){
        delete this.data[key];
    }

    hasItem(key:string){
        return key in this.data;
    }
}

class Database{
    private collections:Record<string,Collection>;

    constructor(){
        this.collections={};
    }

    getCollection(name:string){
        if(name in this.collections === false)
            this.collections[name] = new Collection();
        return this.collections[name];
    }
}

class Cluster{
    private databases:Record<string,Database>;

    constructor(){
        this.databases={};
    }

    getDatabase(name:string){
        if(name in this.databases === false)
            this.databases[name] = new Database();
        return this.databases[name];
    }
}

export default new Cluster();
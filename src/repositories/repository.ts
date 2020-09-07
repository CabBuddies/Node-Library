import * as mongoose from 'mongoose';

export default interface Repository{
    model : mongoose.Model<any,{}>;
    get : Function,
    getAll : Function,
    create : Function,
    update : Function,
    updatePartial : Function,
    delete : Function,
    isAuthor (entityId : string, universalId : string) : Promise<boolean>,
    [propName: string]: any
}
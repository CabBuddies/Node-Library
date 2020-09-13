import * as mongoose from 'mongoose';

export default interface Repository{
    model : mongoose.Model<any,{}>;
    get(documentId:string ,attributes?:any ) : Promise<any>,
    getAll(query?:any, sort?:any, pageSize?:number, pageNum?:number, attributes?:any) : Promise<{ query: any; sort: any; attributes: any; pageSize: number; pageNum: number; resultSize: number; resultTotalSize: number; result: any[]; }>,
    create(document:any) : Promise<any>,
    update(documentId:string, document:any) : Promise<any>,
    updatePartial(documentId:string, document:any) : Promise<any>,
    delete(documentId:string) : Promise<any>,
    [propName: string]: any
}
import Repository from '../repositories/repository';
import Request from '../helpers/request.helper';

export default interface Service{
    repository : Repository;
    get(request:Request, documentId:string, attributes?:any) : Promise<any>,
    getAll(request:Request, query:any, sort:any, pageSize:number, pageNum:number, attributes:any) : Promise<{ query: any; pageSize: number; pageNum: number; resultSize: number; resultTotalSize: number; result: any[]; }>,
    create(request:Request, document:any) : Promise<any>,
    update(request:Request, documentId:string, document:any) : Promise<any>,
    updatePartial(request:Request, documentId:string, document:any) : Promise<any>,
    delete(request:Request, documentId:string) : Promise<any>,
    [propName: string]: any
}
import * as mongoose from 'mongoose';
import Respository from './repository';
declare class BaseRepository implements Respository {
    model: mongoose.Model<any, {}>;
    constructor(model?: mongoose.Model<any, {}>);
    get: (documentId: string, attributes?: {
        password: number;
    }) => Promise<any>;
    getAll: (query?: {}, sort?: {}, pageSize?: number, pageNum?: number, attributes?: any) => Promise<{
        query: {};
        pageSize: number;
        pageNum: number;
        resultSize: number;
        resultTotalSize: number;
        result: any[];
    }>;
    create: (document: any) => Promise<any>;
    update: (documentId: string, document: any) => Promise<any>;
    updatePartial: (documentId: string, partial: any) => Promise<any>;
    delete: (documentId: string) => Promise<any>;
    deleteAll: () => Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
export default BaseRepository;

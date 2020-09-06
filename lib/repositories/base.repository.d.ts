import * as mongoose from 'mongoose';
import Respository from './repository';
declare class BaseRepository implements Respository {
    model: mongoose.Model<any, {}>;
    constructor(model?: mongoose.Model<any, {}>);
    get: (id: any, attributes?: {
        password: number;
    }) => Promise<any>;
    getAll: (query?: {}, pageSize?: number, pageNum?: number, attributes?: any) => Promise<{
        query: {};
        pageSize: number;
        pageNum: number;
        resultSize: number;
        resultTotalSize: number;
        result: any[];
    }>;
    create: (entity: any) => Promise<any>;
    update: (id: any, entity: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    deleteAll: () => Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
export default BaseRepository;

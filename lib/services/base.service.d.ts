import Service from './service';
import Repository from '../repositories/repository';
import Request from '../helpers/request.helper';
import * as PubSub from './pubsub';
declare class BaseService implements Service, PubSub.Subscriber {
    repository: Repository;
    constructor(repository?: Repository);
    messageSent(message: PubSub.Message): void;
    buildError(errorCode?: number, errorMessage?: string): {};
    get: (request: Request, entityId: any, attributes?: {}) => Promise<any>;
    getAll: (request: Request, query?: {}, pageSize?: number, pageNum?: number, attributes?: {}) => Promise<any>;
    create: (request: Request, entity: any) => Promise<any>;
    update: (request: Request, entityId: any, entity: any) => Promise<any>;
    updatePartial: (request: Request, entityId: any, partial: any) => Promise<any>;
    delete: (request: Request, entityId: any) => Promise<any>;
    deleteAll: (request: Request) => Promise<any>;
}
export default BaseService;

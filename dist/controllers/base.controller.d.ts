import * as express from 'express';
import Controler from './controller';
import Service from '../services/service';
import Request from '../helpers/request.helper';
declare class BaseController implements Controler {
    service: Service;
    constructor(service: Service);
    create: (req: express.Request, res: express.Response) => Promise<express.Response<any>>;
    get: (req: express.Request, res: express.Response) => Promise<express.Response<any>>;
    getAll: (req: express.Request, res: express.Response) => Promise<express.Response<any>>;
    update: (req: express.Request, res: express.Response) => Promise<express.Response<any>>;
    delete: (req: express.Request, res: express.Response) => Promise<express.Response<any>>;
    deleteAll: (req: express.Request, res: express.Response) => Promise<express.Response<any>>;
}
export default BaseController;

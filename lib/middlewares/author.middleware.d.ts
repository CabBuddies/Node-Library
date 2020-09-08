import * as express from 'express';
import Request from '../helpers/request.helper';
import { Service } from '../services';
export default function authCheck(service: Service): (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<express.Response<any>>;

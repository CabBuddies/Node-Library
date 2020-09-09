import * as express from 'express';
import Request from '../helpers/request.helper';
import { Service } from '../services';
declare function requestProcessor(service?: Service): (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
export { requestProcessor };

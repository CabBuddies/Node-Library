import * as express from 'express';
import Request from '../helpers/request.helper';
import { Repository } from '../repositories';
declare function requestProcessor(repository?: Repository): (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
export { requestProcessor };

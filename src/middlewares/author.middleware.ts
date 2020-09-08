import * as express from 'express';
import Request from '../helpers/request.helper';
import { Service } from '../services';

export default function authCheck(service : Service){
    console.log('AMJ',service)
    return async function ( req : express.Request , res : express.Response , next : express.NextFunction ) {
        try {
            const request :Request = res.locals.request;
            const isAuthor = await service.isAuthor(req.params.id,request.getId());
            if(!isAuthor){
                console.log('AMJ',403)
                return res.sendStatus(403);
            }
            next();
        } catch (error) {
            console.log(error)
        }
    }
}
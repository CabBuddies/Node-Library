import * as express from 'express';
import Request from '../helpers/request.helper';
import {Service} from '../services'
import * as jwtHelper from '../helpers/jwt.helper';

function extractToken(req:express.Request){
    try {
        console.log(req.headers['authorization'])
        const p = req.headers['authorization'].split(' ');
        if(p.length==2)
            return {
                type:p[0],//refresh or access
                value:p[1],//actual token(jwt) string
                expiryTime:0//expiration time is extracted from decoded payload
            }
    } catch (error) {
        console.log(error.message)
    }
    return null
}

function extractIP(req:express.Request){
    try {
        const xForwardedFor = ((req.headers['x-forwarded-for']+'') || '').replace(/:\d+$/, '');
        const ip = xForwardedFor || req.connection.remoteAddress;
        return req.ip||ip;
    } catch (error) {
        console.log(error.message)
    }
    return null
}

function requestProcessor (service : Service = null){
    return async function ( req : express.Request , res : express.Response , next : express.NextFunction ){
        console.log('middleware','requestProcessor','begin');
        try {
            const request : Request = new Request();
            console.log('middleware','requestProcessor',request);
    
            request.setIP(extractIP(req));
            const token = extractToken(req);
            request.setToken(token);

            console.log('middleware','requestProcessor',request);
        
            if(request.hasToken){
                const decoded :jwtHelper.Auth = await jwtHelper.decodeToken(request.getToken());
        
                if(decoded){
    
                    let activeTokenCount = 1;
    
                    try {
                        if(service){
                            if(request.getTokenType()==='refresh'){
                                activeTokenCount = await service.getActiveRefreshTokenCount(request);
                            }
                        }
                    } catch (error) {
                        console.log(error.message)
                    }
    
                    if(activeTokenCount === 1){
                        request.setUserId(decoded.id);
                        request.setEmail(decoded.email);
                        token.expiryTime = decoded.expiryTime;
                        request.setToken(token);
                    }
    
                }
            }

            console.log('middleware','requestProcessor','almost done',request);
        
            res.locals={request}
            next()
        } catch (error) {
            console.log('middleware','requestProcessor',error)
            res.send(500).send('unknown issue');
        }
    }
}

export {requestProcessor};
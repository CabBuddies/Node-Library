import Request from '../helpers/request.helper';
import * as jwtHelper from '../helpers/jwt.helper';
function extractToken(req) {
    try {
        console.log(req.headers['authorization']);
        const p = req.headers['authorization'].split(' ');
        if (p.length == 2)
            return {
                type: p[0],
                value: p[1],
                expiryTime: 0 //expiration time is extracted from decoded payload
            };
    }
    catch (error) {
        console.log(error.message);
    }
    return null;
}
function extractIP(req) {
    try {
        const xForwardedFor = ((req.headers['x-forwarded-for'] + '') || '').replace(/:\d+$/, '');
        const ip = xForwardedFor || req.connection.remoteAddress;
        return req.ip || ip;
    }
    catch (error) {
        console.log(error.message);
    }
    return null;
}
function requestProcessor(repository) {
    return async function (req, res, next) {
        try {
            const request = new Request();
            request.setIP(extractIP(req));
            const token = extractToken(req);
            request.setToken(token);
            if (request.hasToken) {
                const decoded = await jwtHelper.decodeToken(request.getToken());
                if (decoded) {
                    let activeTokenCount = 1;
                    try {
                        if (repository)
                            if (request.getTokenType() === 'refresh') {
                                activeTokenCount = await repository.getActiveRefreshTokenCount(request.getTokenValue());
                            }
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                    if (activeTokenCount === 1) {
                        request.setUserId(decoded.id);
                        request.setEmail(decoded.email);
                        token.expiryTime = decoded.expiryTime;
                        request.setToken(token);
                    }
                }
            }
            res.locals = { request };
            next();
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };
}
export { requestProcessor };
//# sourceMappingURL=request.middleware.js.map
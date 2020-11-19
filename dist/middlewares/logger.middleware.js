function logger(version) {
    return (req, res, next) => {
        console.log('logger version', version);
        console.log(req.ip, req.method, req.url, req.query, req.body);
        const startTime = Date.now();
        res.addListener('finish', () => {
            const endTime = Date.now();
            console.log(req.ip, req.method, req.url, (endTime - startTime) + 'MS');
        });
        next();
    };
}
export { logger };
//# sourceMappingURL=logger.middleware.js.map
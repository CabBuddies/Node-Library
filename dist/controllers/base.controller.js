class BaseController {
    constructor(service) {
        this.create = async (req, res) => {
            const request = res.locals.request;
            const body = req.body;
            const createdEntity = await this.service.create(request, body);
            return res.send(createdEntity);
        };
        this.get = async (req, res) => {
            const request = res.locals.request;
            const entityId = req.params.id;
            const entity = await this.service.get(request, entityId);
            return res.send(entity);
        };
        this.getAll = async (req, res) => {
            const request = res.locals.request;
            const pageSize = parseInt(req.query.pageSize + '') || 5;
            const pageNum = parseInt(req.query.pageNum + '') || 1;
            const query = req.body.query;
            const attributes = undefined;
            const result = await this.service.getAll(request, query, pageSize, pageNum, attributes);
            return res.send(result);
        };
        this.update = async (req, res) => {
            const request = res.locals.request;
            const entityId = req.params.id;
            const body = req.body;
            const updatedEntity = await this.service.update(request, entityId, body);
            return res.send(updatedEntity);
        };
        this.delete = async (req, res) => {
            const request = res.locals.request;
            const entityId = req.params.id;
            const deletedEntity = await this.service.delete(request, entityId);
            return res.send(deletedEntity);
        };
        this.deleteAll = async (req, res) => {
            const request = res.locals.request;
            const deletedEntities = await this.service.deleteAll(request);
            return res.send(deletedEntities);
        };
        this.service = service;
    }
}
export default BaseController;
//# sourceMappingURL=base.controller.js.map
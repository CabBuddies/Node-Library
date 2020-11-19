class BaseService {
    constructor(repository) {
        this.get = async (request, entityId, attributes = {}) => {
            if (!entityId) {
                throw this.buildError(400, "entityId is required.");
            }
            if (attributes) {
                attributes['password'] = 0;
            }
            const currentEntity = await this.repository.get(entityId, attributes);
            if (!currentEntity) {
                throw this.buildError(404, "Requested entity not found.");
            }
            return currentEntity;
        };
        this.getAll = async (request, query = {}, pageSize = 5, pageNum = 1, attributes = {}) => {
            if (attributes) {
                attributes['password'] = 0;
            }
            return await this.repository.getAll(query, pageSize, pageNum, attributes);
        };
        this.create = async (request, entity) => {
            return await this.repository.create(entity);
        };
        this.update = async (request, entityId, entity) => {
            if (!entityId) {
                throw this.buildError(400, "entityId is required.");
            }
            return await this.repository.update(entityId, entity);
        };
        this.delete = async (request, entityId) => {
            if (!entityId) {
                throw this.buildError(400, "entityId is required.");
            }
            return await this.repository.delete(entityId);
        };
        this.deleteAll = async (request) => {
            return await this.repository.deleteAll();
        };
        this.repository = repository;
    }
    eventListened(event) {
        console.log(event);
    }
    buildError(errorCode = 500, errorMessage = "Unknown Server Error.") {
        const error = {};
        error['status'] = errorCode;
        error['message'] = errorMessage;
        return error;
    }
}
export default BaseService;
//# sourceMappingURL=base.service.js.map
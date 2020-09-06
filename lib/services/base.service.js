"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
    constructor(repository = null) {
        this.get = (request, entityId, attributes = {}) => __awaiter(this, void 0, void 0, function* () {
            if (!entityId) {
                throw this.buildError(400, "entityId is required.");
            }
            if (attributes) {
                attributes['password'] = 0;
            }
            const currentEntity = yield this.repository.get(entityId, attributes);
            if (!currentEntity) {
                throw this.buildError(404, "Requested entity not found.");
            }
            return currentEntity;
        });
        this.getAll = (request, query = {}, pageSize = 5, pageNum = 1, attributes = {}) => __awaiter(this, void 0, void 0, function* () {
            if (attributes) {
                attributes['password'] = 0;
            }
            return yield this.repository.getAll(query, pageSize, pageNum, attributes);
        });
        this.create = (request, entity) => __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(entity);
        });
        this.update = (request, entityId, entity) => __awaiter(this, void 0, void 0, function* () {
            if (!entityId) {
                throw this.buildError(400, "entityId is required.");
            }
            return yield this.repository.update(entityId, entity);
        });
        this.delete = (request, entityId) => __awaiter(this, void 0, void 0, function* () {
            if (!entityId) {
                throw this.buildError(400, "entityId is required.");
            }
            return yield this.repository.delete(entityId);
        });
        this.deleteAll = (request) => __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.deleteAll();
        });
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
exports.default = BaseService;

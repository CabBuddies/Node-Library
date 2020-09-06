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
class BaseController {
    constructor(service) {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const request = res.locals.request;
            const body = req.body;
            const createdEntity = yield this.service.create(request, body);
            return res.send(createdEntity);
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const request = res.locals.request;
            const entityId = req.params.id;
            const entity = yield this.service.get(request, entityId);
            return res.send(entity);
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const request = res.locals.request;
            const pageSize = parseInt(req.query.pageSize + '') || 5;
            const pageNum = parseInt(req.query.pageNum + '') || 1;
            const query = req.body.query;
            const attributes = undefined;
            const result = yield this.service.getAll(request, query, pageSize, pageNum, attributes);
            return res.send(result);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const request = res.locals.request;
            const entityId = req.params.id;
            const body = req.body;
            const updatedEntity = yield this.service.update(request, entityId, body);
            return res.send(updatedEntity);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const request = res.locals.request;
            const entityId = req.params.id;
            const deletedEntity = yield this.service.delete(request, entityId);
            return res.send(deletedEntity);
        });
        this.deleteAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const request = res.locals.request;
            const deletedEntities = yield this.service.deleteAll(request);
            return res.send(deletedEntities);
        });
        this.service = service;
    }
}
exports.default = BaseController;

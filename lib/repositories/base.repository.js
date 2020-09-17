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
class BaseRepository {
    constructor(model = null) {
        this.model = model;
    }
    get(documentId, attributes = { password: 0 }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('base.repository ', documentId);
            return yield this.model.findById(documentId).select(attributes);
        });
    }
    getAll(query = {}, sort = {}, pageSize = 5, pageNum = 1, attributes = { 'password': 0 }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('base.repository', query, sort, attributes, pageSize, pageNum);
            const skips = pageSize * (pageNum - 1);
            console.log(query, pageSize, pageNum);
            const resultTotalSize = yield this.model.count(query);
            let result = [];
            if (resultTotalSize > 0) {
                result = yield this.model.find(query).sort(sort).skip(skips).limit(pageSize).select(attributes);
            }
            const resultSize = result.length;
            console.log(result);
            return {
                query,
                sort,
                attributes,
                pageSize,
                pageNum,
                resultSize,
                resultTotalSize,
                result
            };
        });
    }
    create(document) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(document);
        });
    }
    update(documentId, document) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(documentId, document, { new: true });
        });
    }
    updatePartial(documentId, partial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(documentId, { $set: partial }, { new: true });
        });
    }
    delete(documentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndDelete(documentId);
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.deleteMany({});
        });
    }
}
exports.default = BaseRepository;

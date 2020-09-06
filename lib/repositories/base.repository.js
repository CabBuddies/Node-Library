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
const mongoose = require("mongoose");
class BaseRepository {
    constructor(model = null) {
        this.get = (id, attributes = { password: 0 }) => __awaiter(this, void 0, void 0, function* () {
            console.log('base.repository ', id, new mongoose.Types.ObjectId(id));
            return yield this.model.findById(new mongoose.Types.ObjectId(id)).select(attributes);
        });
        this.getAll = (query = {}, pageSize = 5, pageNum = 1, attributes = { 'password': 0 }) => __awaiter(this, void 0, void 0, function* () {
            const skips = pageSize * (pageNum - 1);
            console.log(query, pageSize, pageNum);
            const resultTotalSize = yield this.model.count(query);
            let result = [];
            if (resultTotalSize > 0) {
                console.log('base.repository', query);
                result = yield this.model.find(query).skip(skips).limit(pageSize).select(attributes);
            }
            const resultSize = result.length;
            console.log(result);
            return {
                query,
                pageSize,
                pageNum,
                resultSize,
                resultTotalSize,
                result
            };
        });
        this.create = (entity) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(entity);
        });
        this.update = (id, entity) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(id, entity, { new: true });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndDelete(id);
        });
        this.deleteAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.deleteMany({});
        });
        this.model = model;
    }
}
exports.default = BaseRepository;

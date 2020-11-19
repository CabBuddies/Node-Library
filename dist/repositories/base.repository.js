import * as mongoose from 'mongoose';
class BaseRepository {
    constructor(model) {
        this.get = async (id, attributes = { password: 0 }) => {
            console.log('base.repository ', id, new mongoose.Types.ObjectId(id));
            return await this.model.findById(new mongoose.Types.ObjectId(id)).select(attributes);
        };
        this.getAll = async (query = {}, pageSize = 5, pageNum = 1, attributes = { 'password': 0 }) => {
            //skip - limit
            const skips = pageSize * (pageNum - 1);
            console.log(query, pageSize, pageNum);
            const resultTotalSize = await this.model.count(query);
            let result = [];
            if (resultTotalSize > 0) {
                console.log('base.repository', query);
                result = await this.model.find(query).skip(skips).limit(pageSize).select(attributes);
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
        };
        this.create = async (entity) => {
            return await this.model.create(entity);
        };
        this.update = async (id, entity) => {
            return await this.model.findByIdAndUpdate(id, entity, { new: true });
        };
        this.delete = async (id) => {
            return await this.model.findByIdAndDelete(id);
        };
        this.deleteAll = async () => {
            return await this.model.deleteMany({});
        };
        this.model = model;
    }
}
export default BaseRepository;
//# sourceMappingURL=base.repository.js.map
import * as mongoose from 'mongoose';
import Respository from './repository';

class BaseRepository implements Respository{
    model : mongoose.Model<any,{}>;
    
    constructor(model: mongoose.Model<any,{}> = null){
        this.model = model;
    }

    get = async(documentId:string ,attributes = {password:0}) => {
        console.log('base.repository ',documentId)
        return await this.model.findById(documentId).select(attributes);
    }

    getAll = async(query = {}, sort = {}, pageSize : number = 5, pageNum : number = 1, attributes:any={'password':0}) => {
        //skip - limit
        console.log('base.repository',query,sort,attributes,pageSize,pageNum);
        const skips = pageSize * (pageNum - 1)
        console.log(query,pageSize,pageNum)
        const resultTotalSize = await this.model.count(query);
        let result = [];
        if(resultTotalSize > 0){

            const select = [{"password":0},{}];

            for(const k in attributes){
                const i = attributes[k] === 0 ? 0 : 1
                select[i][k] = i;
            }

            result = await this.model.find(query).sort(sort).skip(skips).limit(pageSize).select(select[0]).select(select[1]);
        }
        const resultSize = result.length
        console.log(result)
        return {
            query,
            sort,
            attributes,
            pageSize,
            pageNum,
            resultSize,
            resultTotalSize,
            result
        }
    }

    create = async(document:any) => {
        return await this.model.create(document);
    }

    update = async(documentId:string , document) => {
        return await this.model.findByIdAndUpdate(documentId, document, {new: true});
    }

    updatePartial = async(documentId:string , partial:any) => {
        return await this.model.findByIdAndUpdate(documentId, {$set:partial}, {new: true});
    }

    delete = async(documentId:string) => {
        return await this.model.findByIdAndDelete(documentId);
    }

    deleteAll = async() => {
        return await this.model.deleteMany({});
    }
}

export default BaseRepository;
import * as mongoose from 'mongoose';

const simpleAccessSchema = new mongoose.Schema({
    users:[{
        type:mongoose.Schema.Types.ObjectId
    }],
    editable:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    lastModifiedAt:{
        type: Date,
        default: Date.now
    },
    accessGroupType:{
        type: String, 
        enum : ['all','followers', 'followees','set'], 
        default: 'all'
    },
    accessType:[{
        type: String, 
        enum : ['read', 'update', 'delete'], 
        default: 'read'
    }]
});

export default simpleAccessSchema;
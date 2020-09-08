"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const simpleAccessSchema = new mongoose.Schema({
    users: [{
            type: mongoose.Schema.Types.ObjectId
        }],
    accessGroup: {
        type: String,
        enum: ['user', 'group'],
        default: 'group'
    },
    accessGroupType: {
        type: String,
        enum: ['all', 'followers', 'followees', 'set'],
        default: 'all'
    },
    accessType: [{
            type: String,
            enum: ['read', 'update', 'delete'],
            default: 'read'
        }]
});
exports.default = simpleAccessSchema;

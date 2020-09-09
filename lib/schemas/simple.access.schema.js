"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const simpleAccessSchema = new mongoose.Schema({
    users: [{
            type: mongoose.Schema.Types.ObjectId
        }],
    editable: {
        type: Boolean,
        default: true
    },
    accessOf: {
        type: {
            type: String,
            required: 'accessOf.type is required'
        },
        refId: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'refId is required'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now
    },
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

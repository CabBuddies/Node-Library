"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessSchema = void 0;
const mongoose = require('mongoose');
const accessSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'user id is required'
    },
    accessType: {
        type: String,
        enum: ['C', 'R', 'U', 'D'],
        default: 'R'
    }
});
exports.accessSchema = accessSchema;

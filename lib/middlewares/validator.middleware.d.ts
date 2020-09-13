import * as express from 'express';
interface ValidationTypeSchema {
    name: string;
    data?: any;
    type: string;
}
interface ValidationSchema extends ValidationTypeSchema {
    array_defaultValue?: any[];
    array_item_type?: any;
    array_min?: number;
    array_max?: number;
    array_size?: number;
    array_unique?: boolean;
    array_normalize?: boolean;
    defaultValue?: any;
    min?: number;
    max?: number;
    size?: number;
    regex?: string;
    trim?: boolean;
    lower?: boolean;
    upper?: boolean;
    equal?: any;
    anyOf?: any[];
    optional?: boolean;
}
export default function validateRequestBody(schemas: ValidationSchema[]): (req: express.Request, res: express.Response, next: express.NextFunction) => express.Response<any>;
export {};

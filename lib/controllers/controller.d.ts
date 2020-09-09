import * as express from 'express';
import Service from '../services/service';
export default interface Controller {
    service?: Service;
    get?: express.Application;
    getAll?: express.Application;
    create?: express.Application;
    update?: express.Application;
    updatePartial?: express.Application;
    delete?: express.Application;
}

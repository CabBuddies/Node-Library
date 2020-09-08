import Repository from '../repositories/repository';
export default interface Service {
    repository: Repository;
    get: Function;
    getAll: Function;
    create: Function;
    update: Function;
    updatePartial: Function;
    delete: Function;
    isAuthor(entityId: string, universalId: string): Promise<boolean>;
    [propName: string]: any;
}

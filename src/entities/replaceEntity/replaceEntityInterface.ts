import { IMongoModel } from '../../shared/interfaces/IMongoModel';
export interface replaceEntityInterface extends IMongoModel {
  [name: string]: string;
}

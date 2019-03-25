import { IPostgresModel } from '../../../shared/interfaces/IPostgresModel';
export interface ReplaceEntityInterface extends IPostgresModel {
  [name: string]: string;
}

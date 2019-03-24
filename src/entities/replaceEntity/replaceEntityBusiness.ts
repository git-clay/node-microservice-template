import { OK } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import withException from '../../shared/decorators/withException';

export default class replaceEntityBusiness {

  constructor(private replaceEntityController) {}

  @withException
  async getreplaceEntitys(req: Request, res: Response, next: NextFunction) {
    const result = await this.replaceEntityController.find({});
    res.status(OK).send(result);
  }
}

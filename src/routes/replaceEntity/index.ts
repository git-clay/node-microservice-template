import { Request, Response, NextFunction, Router } from 'express';
import { check, validationResult } from 'express-validator/check';

import UnprocessableEntityException from '../../shared/exceptions/UnprocessableEntityException';
import providers from '../../config/providers';

const replaceEntityBusiness = providers.replaceEntityBusiness;

const router = Router();
const checkEntityGet = [
  check('somefield').exists()
];

router.get('/', checkEntityGet, (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new UnprocessableEntityException(errors.array()));
    return;
  }
  replaceEntityBusiness.getreplaceEntitys(req, res, next);
});

export default router;

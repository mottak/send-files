import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../Error/customError';

const fileExists = (req: Request, res: Response, next: NextFunction) => {
  if(!req.file) {
    throw new CustomError('File is required', 'NotFound')
  }
  next()
}

export default { fileExists }
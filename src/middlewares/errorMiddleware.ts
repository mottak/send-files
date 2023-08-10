import { NextFunction, Request, Response } from 'express'
// import Joi from 'joi'
const errors: Record<string, number> = {
  BadRequest: 400,
  UnauthorizedError: 401,
  NotFound: 404,
  ConflitError: 409,
  InternalServerError: 500
}



export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err
  const status = errors[name]
  if (status) {
    return res.status(status).json({ message })
  }
  res.sendStatus(500)
}

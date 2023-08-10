import { Router } from 'express';
import usersRouter from './usersRoutes';
import filesRoutes from './fileRoutes'

const routes = Router();


routes.use("/api", filesRoutes, usersRouter)


export default routes
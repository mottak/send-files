import { Router } from 'express';
import searchFile from '../controllers/usersController'



const usersRouter = Router();

usersRouter.get('/users', searchFile);


export default usersRouter;
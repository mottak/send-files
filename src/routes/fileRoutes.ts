import { Router } from 'express';
import multer from 'multer';
import multerConfigs from '../configs/multerConfigs';
import filesMiddleware from '../middlewares/fileMiddleware'
import fileController from '../controllers/fileController'

const filesRoutes = Router();

filesRoutes.post("/files", multer(multerConfigs).single('file'), filesMiddleware.fileExists, fileController)

export default filesRoutes
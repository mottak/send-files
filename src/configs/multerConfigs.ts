import multer from 'multer'
import path from 'path'
import mime from 'mime'

const multerConfigs: multer.Options = {
  dest: path.resolve(__dirname, '..', 'data', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'data', 'uploads'))
    },

    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);

    },

  }),
  fileFilter: (req, file, cb) => {
      const type = mime.extension(file.mimetype);
      const conditions = ["csv"];
      if (conditions.includes(`${type}`)) {
        cb(null, true);
      }
      cb(null, false);
  }

 
}

export default multerConfigs;

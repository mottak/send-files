import { Request, Response } from 'express';

const uploadFile = (req: Request, res: Response) => {
    if(req.file){
      return res.status(200).json({
        response: `File ${req.file.originalname} uploaded successfully.`,
      })
    }
}

export default uploadFile;
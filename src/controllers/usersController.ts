import { Request, Response } from 'express';
import userService from '../service/user/usersService'
import { read } from 'fs';

const searchFile = async (req: Request, res: Response) => {
  const { q } = req.query;
  const filesNames = await userService.readFilesName()
  await userService.readFileCsv(q as string, filesNames[0], (data) => res.status(200).json(data))
  
}

export default searchFile;
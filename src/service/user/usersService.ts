import fs from 'fs'
import { CustomError } from '../../Error/customError';
import path from 'path';
import { UserInfo } from './user.type';
import csvParser from 'csv-parser';

const readFilesName = async () => {
  const directoryPath = path.resolve(__dirname, '..', '..', 'data', 'uploads');
  try {
    const files = await fs.promises.readdir(directoryPath);
    return files;
  } catch (err) {
    console.error(err);
    return [];
  }
}
  const readFileCsv = async (q: string, fileName: string, next: (users: UserInfo[]) => void) => {
  const regex = new RegExp(q, "gi")
  const results: UserInfo[] = [];
  const pathTofile = path.resolve(__dirname, '..', '..', 'data', 'uploads', `${fileName}`)

  fs.createReadStream(pathTofile)
    .pipe(csvParser())
    .on("data", (data: UserInfo)=> {
        for (const key of Object.values(data)) {        
          if (regex.test(key)) {
            results.push(data)
            break;
          }
        }
    })
    .on("error",  (err: Error) => {
      console.log('handling error: ' + err.message)
      throw new CustomError(err.message,'badRequest')
    })
    .on("end", () => {
      next(results)    
    })
}

export default {
  readFileCsv, readFilesName
}
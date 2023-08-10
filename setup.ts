import fs from 'fs/promises'
import { CustomError } from './src/Error/customError'
import path from 'path';

const readFilesName = async () => {
  const directoryPath = path.resolve(__dirname, 'src', 'data', 'uploads');
  try {
    const files = await fs.readdir(directoryPath);
    return files;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const deleteFiles = async (fileNames: Array<string>) => {

  let count = 0
  try {
    while(count < fileNames.length) {
      const directoryPath = path.resolve(__dirname, 'src', 'data', 'uploads', fileNames[count]);
      await fs.unlink(directoryPath)
      count++

    }

  } catch (err) {
    throw new CustomError('happend a problem to delete files', 'InternalServerError')
  }
}

readFilesName()
  .then((fileNames) => {
    return deleteFiles(fileNames); readFilesName
  })
  .then(() => {
    console.log('Files deleted successfully.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: {
      uploadsFolder: string;
    };

    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER || 'disk',

  tmpFolder,

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {
      uploadsFolder: path.resolve(tmpFolder, 'uploads'),
    },
    aws: {
      bucket: 'eps-app-gobarber',
    },
  },
} as IUploadConfig;

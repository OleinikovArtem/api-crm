import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

import { minioConfig } from 'src/config/minio-config';
import { BufferedFile } from './file.model';

import * as crypto from 'crypto';

@Injectable()
export class MinioClientService {
  private readonly logger: Logger;
  private readonly baseBucket = minioConfig.MINIO_BUCKET || 'bucket';

  public get client() {
    return this.minio.client;
  }

  constructor(
    private readonly minio: MinioService,
  ) {
    this.logger = new Logger('MinioStorageService');
  }

  public async upload(file: BufferedFile, baseBucket: string = this.baseBucket) {
    if (!(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
      throw new HttpException('Error uploading file', HttpStatus.BAD_REQUEST);
    }
    let temp_filename = Date.now().toString();
    let hashedFileName = crypto.createHash('md5').update(temp_filename).digest('hex');
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    const metaData = {
      'Content-Type': file.mimetype,
      // 'X-Amz-Meta-Testing': 1234,
    };
    let filename = hashedFileName + ext;
    const fileName: string = `${filename}`;
    const fileBuffer = file.buffer;
    this.client.putObject(baseBucket, fileName, fileBuffer, metaData, function(err: any, res: any) {
      if (err) {
        console.error(err);
        throw new HttpException('Error uploading file', HttpStatus.BAD_REQUEST);
      }
    });

    return {
      url: `${minioConfig.MINIO_ENDPOINT}:${minioConfig.MINIO_PORT}/${minioConfig.MINIO_BUCKET}/${filename}`,
    };
  }

  async delete(objetName: string, baseBucket: string = this.baseBucket) {
    this.client.removeObject(baseBucket, objetName, function(err: any, res: any) {
      if (err) {
        console.error(err);
        throw new HttpException('Oops Something wrong happend', HttpStatus.BAD_REQUEST);
      }
    });
  }
}

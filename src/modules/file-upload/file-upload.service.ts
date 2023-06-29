import { Injectable } from '@nestjs/common';
import { MinioClientService } from 'src/modules/minio-client/minio-client.service';
import { BufferedFile } from 'src/modules/minio-client/file.model';

@Injectable()
export class FileUploadService {
  constructor(
    private minioClientService: MinioClientService
  ) {}

  async uploadSingle(image: BufferedFile) {
    const uploaded_image = await this.minioClientService.upload(image)
    let image_url = uploaded_image.url

    if (process.env.NODE_ENV !== 'development') {
      image_url = 'http://localhost' + image_url.slice(5)
    }

    return {
      image_url,
      message: "Successfully uploaded to MinIO S3"
    }
  }
}

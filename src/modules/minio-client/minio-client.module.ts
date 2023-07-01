import { Module } from '@nestjs/common';
import { MinioClientService } from './minio-client.service';
import { MinioModule } from 'nestjs-minio-client';
import { minio_config } from 'src/config/minio-config'

const { minio_endpoint, minio_bucket, minio_secret_key, minio_access_key, minio_port } = minio_config()

@Module({
  imports: [
    MinioModule.register({
      endPoint: minio_endpoint,
      port: minio_port,
      useSSL: false,
      accessKey: minio_access_key,
      secretKey: minio_secret_key,
    })
  ],
  providers: [MinioClientService],
  exports: [MinioClientService]
})
export class MinioClientModule {}

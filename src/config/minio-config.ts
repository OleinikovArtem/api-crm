export const minioConfig = {
  MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
  MINIO_PORT: Number(process.env.MINIO_PORT),
  MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY,
  MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY,
  MINIO_BUCKET: process.env.MINIO_BUCKET,
}

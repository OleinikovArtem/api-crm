export const minioConfig = {
  MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
  MINIO_PORT: Number(process.env.MINIO_PORT),
  MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY,
  MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY,
  MINIO_BUCKET: process.env.MINIO_BUCKET,
}

export const minio_config = () => ({
  minio_port: Number(process.env.MINIO_PORT) || 9000,
  minio_endpoint: process.env.MINIO_ENDPOINT || 'minio',
  minio_access_key: process.env.MINIO_ACCESS_KEY || '',
  minio_secret_key: process.env.MINIO_SECRET_KEY || '',
  minio_bucket: process.env.MINIO_BUCKET || 'bucket',
});

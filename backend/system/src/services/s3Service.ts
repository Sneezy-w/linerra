import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


import { Readable } from "stream";

const s3Client = new S3Client({ region: process.env.AWS_REGION });
const LABEL_BUCKET_NAME = process.env.S3_LABEL_BUCKET_NAME;

export class S3Service {

  public static instance: S3Service = new S3Service();


  async uploadLabelFile(key: string, body: Buffer, contentType: string): Promise<void> {
    const command = new PutObjectCommand({
      Bucket: LABEL_BUCKET_NAME,
      Key: key,
      Body: body,
      ContentType: contentType,
    });

    await s3Client.send(command);
  }

  async getLabelFile(key: string): Promise<Buffer> {
    const command = new GetObjectCommand({
      Bucket: LABEL_BUCKET_NAME,
      Key: key,
    });

    const response = await s3Client.send(command);
    return streamToBuffer(response.Body as Readable);
  }

  async getSignedLabelUrl(key: string, expiresIn = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: LABEL_BUCKET_NAME,
      Key: key,
    });
    return getSignedUrl(s3Client, command, { expiresIn });
  }

}

async function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}

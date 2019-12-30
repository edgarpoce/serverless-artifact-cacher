/**
 * This doesn't really need to exist separately from the primary API modules,
 * but it's currently easier to test as a separate module.
 *
 * Specifically, jest mocks of getSignedUrl need to be made from a
 * client imported by "import * as S3 from 'aws-sdk/clients/s3'", while
 * other mocks like headObject need to be made from a client imported by
 * " import { S3 } from 'aws-sdk'".
 *
 * @packageDocumentation
 */

import { S3 } from "aws-sdk";

/** S3 adapter class
 *
 * Each method maps to the corresponding S3 client method
 */
export class S3Adapter {
  public s3Client: S3;
  constructor() {
    this.s3Client = new S3();
  }

  public async getSignedUrlPromise(operation: string, params: any) {
    return this.s3Client.getSignedUrlPromise(operation, params);
  }

  public headObject(params: S3.Types.HeadObjectRequest) {
    return this.s3Client.headObject(params);
  }

  public putObject(params: S3.Types.PutObjectRequest) {
    return this.s3Client.putObject(params);
  }
}

import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

declare global {
  namespace API {
    interface ResponsePageVO<T> {
      items: T[];
      lastEvaluatedKey?: Record<string, NativeAttributeValue>;
    }
  }
}

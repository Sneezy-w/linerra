import { Lambda } from "aws-sdk";
const lambda = new Lambda({
  apiVersion: "2015-03-31",
  // endpoint needs to be set only if it deviates from the default
  endpoint: process.env.IS_OFFLINE
    ? "http://localhost:3002"
    : `https://lambda.${process.env.AWS_REGION}.amazonaws.com`,
})

export class LambdaService {

  public static instance: LambdaService = new LambdaService();

  async invokeAsynchronously(functionName: string, payload: any): Promise<any> {
    return lambda.invoke({
      FunctionName: functionName,
      InvocationType: "Event",
      Payload: JSON.stringify(payload),
    }).promise();
  }
  // invokeAsynchronously(functionName: string, payload: any) {
  //   return lambda.invokeAsync({
  //     FunctionName: functionName,
  //     InvokeArgs: JSON.stringify(payload),
  //   }).promise();
  // }
}

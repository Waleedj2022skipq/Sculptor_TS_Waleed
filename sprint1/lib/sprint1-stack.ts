import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class Sprint1Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //defining a aws lambda resource
    const helloWolrdLambda = new lambda.Function(this,
      "WaleedJaved_Skipq2022_Handler_HelloWorld", // Function name to be displayed on the console
      {
      runtime : lambda.Runtime.NODEJS_14_X, // runtime for the code env
      code: lambda.Code.fromAsset('lambda'), // code loaded from lambda directory
      handler: 'helloLambda.handlerResponse' // file is "helloLambda", functions is "handlerResponse"
    });
  }
}

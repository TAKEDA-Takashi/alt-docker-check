import * as lambdaPython from "@aws-cdk/aws-lambda-python-alpha";
import { aws_lambda as lambda, Stack, StackProps, DockerImage } from "aws-cdk-lib";

import { Construct } from "constructs";

import * as path from "path";

export class AltDockerCheckStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambdaPython.PythonFunction(this, "HelloFunction", {
      entry: path.resolve(__dirname, "../lambda/src/hello"),
      runtime: lambda.Runtime.PYTHON_3_9,
      bundling: {
        image: new DockerImage("public.ecr.aws/sam/build-python3.9:1.64.0-x86_64"),
      }
    });
  }
}

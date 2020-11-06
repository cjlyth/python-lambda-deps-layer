import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export class PythonLambdaDepsLayerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const pydepsLayer = new lambda.LayerVersion(this, 'UpgradeBoto3', {
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_7],
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-layer'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_7.bundlingDockerImage,
          command: [
            'bash', '-c', `
            pip install -r requirements.txt -t /asset-output/python &&
            cp -au . /asset-output/python/
            `,
          ],
        }
      }), 
    });

    const py37DefaultBoto = new lambda.Function(this, 'py37DefaultBoto', {
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
    });

    const py37PackagedBoto = new lambda.Function(this, 'py37PackagedBoto', {
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
      layers: [pydepsLayer,]
    });
  }
}

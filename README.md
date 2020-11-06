# Using a typescript based CDK project to deploy AWS Lambda code and upgrading boto3 

This project demonstrates how to upgrade boto3 using a layer for python projects.  

The lambda in `lib/lambda-handler` is a simple example that prints the boto3 version. 

The version of boto3 is not specified in the handler and can be changed externally with a layer. 

The CDK stack `lib/python-lambda-venv-layer-stack.ts` deployes two versions of the lambda.
One without a layer and one with the layer using a non-default version of boto3. 
This layer can be reused for multiple lambdas.

You can alternatively use the bundler to build the lambda with it's own set of dependencies.
This is out of scope for this sample project, but the bundling shown in the layer can be applied to the lambda construct. 

The easiest way to work with this project is to use two terminal sessions. 
One will handle transpiling the typescript for this I use the watch command `npm run watch`.
That will automatically transpile on changes. 
Using this setup, you simply have to run `cdk deploy` in another terminal to see your changes in AWS. 

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

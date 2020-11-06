import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PythonLambdaVenvLayer from '../lib/python-lambda-deps-layer';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PythonLambdaVenvLayer.PythonLambdaDepsLayerStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

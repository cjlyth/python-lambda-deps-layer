#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PythonLambdaVenvLayerStack } from '../lib/python-lambda-venv-layer-stack';

const app = new cdk.App();
new PythonLambdaVenvLayerStack(app, 'PythonLambdaVenvLayerStack');

#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PythonLambdaDepsLayerStack } from '../lib/python-lambda-deps-layer';

const app = new cdk.App();
new PythonLambdaDepsLayerStack(app, 'PythonLambdaDepsLayerStack');

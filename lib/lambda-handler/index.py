import boto3

def handler(event, context):

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/plain'
        },
        'body': 'This lambda is using boto version {}\n'.format(boto3.__version__)
    }
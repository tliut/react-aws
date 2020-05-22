import json
import boto3


def lambda_handler(event, context):
    goalList = []
    MyDynamoDB = boto3.resource("dynamodb")
    table = MyDynamoDB.Table("GoalsList")
    items = table.scan()["Items"]
     
    # for i in items:
    #     print(i["Goal"]);
    #     goal = i["Goal"];
    #     goalList.append(goal);
    
    # print(goalList)
    # # return goals
    
    return {
        'statusCode': 200,
        'headers': { 
            'Content-Type': 'application/json', 
            'x-custom-header':  'my custom header value',
            'Access-Control-Allow-Origin':  '*'
        },
        'body': json.dumps(items)
    }
# Setting up AWS SQS

Setting up an AWS SQS service is very simple by following the instructions in this document.

# Setup
## AWS service role
We will create a new role to limit who can write into our SQS queue.
- Navigate to the IAM dashboard: https://console.aws.amazon.com/iam
- Click on `Roles`
- Click on `Create role`
- Make sure `AWS service` is selected on the top of the page
- Click on `Step Functions`
- Click on `Next`
- Click on `Tags`
- Add a tag: name | exercise_1
- Name the role: `SendMsgToSqs`
- Click on `Create role`
- Locate the just created role and click on the role
- Remove the `AWSLambdaRole` role
- Click on `Attach policies`
- Search for and select the `AmazonSQSFullAccess` policy
- Click on `Attach policy`
- Copy the Role ARN and store it for later use

## AWS SQS
- Navigate to the AWS SQS service console: https://console.aws.amazon.com/sqs/
- Create a new queue by clicking at the `Create queue` button
    - Name the queue SendWelcomeEmailQueue
    - Change `Access policy` to `Only the specified AWS accounts, IAM users and roles`
    and paste the Role ARN created earlier.
    - Add a tag: name | exercise_1
    - Click on `Create queue`

You can test the new queue by sending a test message from the SQS console: https://console.aws.amazon.com/sqs
    
   

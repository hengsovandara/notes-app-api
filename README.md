# Serverless Notes App API Tutorial

## Setup

Refer to the [[Serverless Documentation]](https://github.com/AnomalyInnovations/serverless-stack-com/tree/master/_chapters)

## Local testing

`serverless invoke local --function create --path mocks/create-event.json`

`serverless invoke local --function get --path mocks/get-event.json`

`serverless invoke local --function list --path mocks/list-event.json`

`serverless invoke local --function update --path mocks/update-event.json`

`serverless invoke local --function delete --path mocks/delete-event.json`

## Deployment

To deploy the entire service to AWS:
`serverless deploy`

To deploy a single function to AWS:
`serverless deploy function -f create`

## Remote testing

Install the apig-test cli first

`npm install -g aws-api-gateway-cli-test`

Then run the following command to test the full API deployment using a test Cognito user. Be sure to fill in the user-pool-id, app-client-id, identity-pool-id and invoke-url. NOTE the invoke URL can be found from the output of running `serverless deploy` - its the full URL without the path and no trailing slash. For example:

`https://h2hsi3jdjks.execute-api.ap-southeast-1.amazonaws.com/prod`

`apig-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='' \
--app-client-id='' \
--cognito-region='ap-southeast-1' \
--identity-pool-id='' \
--invoke-url='' \
--api-gateway-region='ap-southeast-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'`

## Description
This NestJS client is part of an exercise with goal of invoking AWS step function
from outside the Amazon cloud via AWS API Gateway.

![architecture diagram](https://raw.githubusercontent.com/pluresideas/diagrmans/main/aws/step-functions/aws-step-function_local-host-invocation.png)

The AWS API is invoked periodically using NestJS [Task Scheduling](https://docs.nestjs.com/techniques/task-scheduling).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](../../LICENSE).

import { Injectable, Logger } from '@nestjs/common';
import {Cron, CronExpression, Timeout} from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Timeout(0)
  invokeAwsGatewayApiNow() {
    this.logger.debug('AWS Gateway API is being invoked at the app startup...');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  invokeAwsGatewayApi() {
    this.logger.debug('AWS Gateway API is being invoked...');
  }
}

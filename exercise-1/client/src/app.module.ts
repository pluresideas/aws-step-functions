import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import {TasksService} from "./tasks.service";

@Module({
  // init the task scheduler
  imports: [ScheduleModule.forRoot()],
  providers: [TasksService]
})
export class AppModule {}

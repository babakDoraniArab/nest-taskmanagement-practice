import { Module } from '@nestjs/common';
import { TaskService } from 'src/domain/services/task/task.service';

@Module({
    providers: [TaskService]
})
export class TaskModule {}

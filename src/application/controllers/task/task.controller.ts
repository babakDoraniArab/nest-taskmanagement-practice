import { Controller, Get } from '@nestjs/common';
import { Task } from 'src/domain/interfaces/task.interface';
import { TaskService } from 'src/domain/services/task/task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  //   @Get()
  //   async findTask(): Promise<Task[]> {

  //     return this.taskService.findTask();
  //   }
  @Get()
  test() {
     console.log('test');
  }
}

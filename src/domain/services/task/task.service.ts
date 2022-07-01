import { Injectable } from '@nestjs/common';
import { Task } from '../../interfaces/task.interface';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  create(task: Task): Task[] {
    this.tasks.push(task);
    return this.tasks;
  }
  findTask(): Task[] {
    return this.tasks;
  }
}

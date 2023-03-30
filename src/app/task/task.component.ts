import { Task } from './../../types/task-type';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() newTask!: Task;
  tasks: Task[] = [];
  token = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newTask'].currentValue) {
      this.tasks.unshift(changes['newTask'].currentValue);
    }
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('access_token') as string;
    this.taskService.getTasks(this.token as string).subscribe((res: Task[]) => {
      this.tasks = res.reverse();
    });
  }

  delete(id: string) {
    this.taskService.deleteTask(id, this.token as string).subscribe(() => {
      this.tasks = this.tasks.filter((task: Task) => task._id !== id);
    });
  }

  constructor(private taskService: TaskService) {}
}

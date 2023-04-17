import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/types/task-type';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(
    private taskService: TaskService
  ) {}

  tasks: Task[] = []
  token!: string
  private currentTask!: number

  ngOnInit() {
    this.token = sessionStorage.getItem('access_token') as string;
    this.taskService.getTasks(this.token as string).subscribe((res: Task[]) => {
      this.tasks = res.reverse();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newTask'].currentValue) {
      this.tasks.unshift(changes['newTask'].currentValue);
    }
  }

  onStatusChange(event: Event, id: string){
    this.taskService.update(id, (event.target as HTMLInputElement).checked, this.token).subscribe(() => {
      this.currentTask = this.tasks.findIndex(task => task._id === id)
      this.tasks[this.currentTask].isDone = (event.target as HTMLInputElement).checked
    })
  }


  delete(id: string) {
    this.taskService.deleteTask(id, this.token as string).subscribe(() => {
      this.tasks = this.tasks.filter((task: Task) => task._id !== id);
    });
  }

  reset(){ this.taskService.resetTask(this.token).subscribe(() => {
    this.tasks.splice(0, this.tasks.length)
  }) }

}

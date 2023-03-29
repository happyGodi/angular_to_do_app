import { Task } from './../../types/task-type';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  tasks!: Observable<Task[]>

  ngOnInit(): void{
    this.tasks = this.taskService.getTasks()
    console.log(this.tasks.subscribe(res => res))
  }

  delete(id: number){
    this.taskService.deleteTask(id)
  }

  constructor(
    private taskService: TaskService,
  ){}
}

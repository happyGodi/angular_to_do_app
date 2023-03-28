import { Task } from './../../types/task-type';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { save, getData } from '../utils/utils';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  tasks!: Task[]

  ngOnInit(){
    this.tasks = this.taskService.getTasks()
    save(this.tasks)
    console.log(this.tasks)
  }

  delete(id: number){
    this.taskService.deleteTask(id)
    save(this.tasks)
  }

  constructor(
    private taskService: TaskService,
  ){}
}

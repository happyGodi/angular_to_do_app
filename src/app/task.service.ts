import { Injectable } from '@angular/core';
import { Task } from 'src/types/task-type';
import { save, getData } from './utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []

  addTask(task: Task) {
    this.tasks.push(task)
    save(this.tasks)
    console.log(this.tasks)
  }

  getTasks(){ return this.tasks }

  deleteTask(id: number){
    save(this.tasks)
    this.tasks.splice(id, 1)
  }

  resetTask(){
    this.tasks = []
    save(this.tasks)
  }

  constructor() { }
}

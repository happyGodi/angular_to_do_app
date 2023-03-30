import { Task } from 'src/types/task-type';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  task!: Task;
  taskForm = this.formBuilder.group({
    taskName: ['', Validators.required],
    isDone: [false]
  })

  error = ''
  token = ''


  ngOnInit(){
    this.token = sessionStorage.getItem('access_token') as string;
  }

  onSubmit(data: any){
    if (data.taskName !== '') {
      this.taskService.addTask(data, this.token).subscribe((res: any) => {
        this.task = res
      })
    }
    /*
    else {
      this.error = 'Cannot accept empty field!'
      setTimeout(() => {
        this.error = ''
      }, 2000);
    } */
  }

  disconnect(){
    sessionStorage.removeItem('access_token')
    this.router.navigate(['/'])
  }

  reset(){ this.taskService.resetTask()}

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
  ){}

}

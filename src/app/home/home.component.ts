import { Task } from 'src/types/task-type';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  task!: Task;
  user!: {
    name: string,
    username: string,
    email: string
  }

  columnInfo: Array<Object> = [
    { name: 'Task name', property: 'taskName'},
    { name: 'Date', property: 'date'},
    { name: 'Status', property: 'isDone'},
    { name: 'Delete', property: 'delete'},
  ]
  columnWidth: Array<string> = ['calc(90% / 3)', 'calc(90% / 3)', '10%', 'calc(90% / 3)']
  taskForm = this.formBuilder.group({
    taskName: ['', Validators.required],
    isDone: [false]
  })

  error = ''
  token = ''


  ngOnInit(){
    this.token = sessionStorage.getItem('access_token') as string;
    this.user = JSON.parse(this.cookieService.get('user'))
  }

  onSubmit(data: any){
    if (data.taskName !== '') {
      this.taskService.addTask(data, this.token).subscribe((res: any) => {
        this.task = res
      })
    }
    else {
      this.error = 'Cannot accept empty field!'
      setTimeout(() => {
        this.error = ''
      }, 2000);
    }
  }



  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private cookieService: CookieService,
    //private httpHeaders: HttpHeaders
  ){}

}

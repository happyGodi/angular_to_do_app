import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  error = ''

  taskForm = this.formBuilder.group({
    name: ['', Validators.required]
  })

  onSubmit(data: any){
    if (data.name !== '') {
      data.date = Date.now()
      this.taskService.addTask(data)
    }
    else {
      this.error = 'Cannot accept empty field!'
      setTimeout(() => {
        this.error = ''
      }, 2000);
    }
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

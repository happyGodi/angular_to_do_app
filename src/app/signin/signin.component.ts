import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  users!: User[]
  error = ''

  signInForm = this.formBuiler.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(data: any){
    if (data.username == '' || data.password == '') {
      this.error = 'Cannot accept empty field!'
      setTimeout(() => {
        this.error = ''
      }, 2000);
    }
    else {
      if ( this.userService.signIn(data) && this.error === '' ) this.router.navigateByUrl('/home')
      else {
        this.error = 'Incorrect username or password!'
        setTimeout(() => {
          this.error = ''
        }, 2000);
      }
    }
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
   }

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuiler: FormBuilder
  ){}

}

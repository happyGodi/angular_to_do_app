import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { User } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  users!: User[]
  error = ''

  signUpForm = this.formBuiler.group({
    username: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  onSubmit(data: any){
    if (data.username == '' || data.password == '' || data.email == '') {
      this.error = 'Cannot accept empty field!'
      setTimeout(() => {
        this.error = ''
      }, 2000);
    }
    else {
      if ( this.userService.addUser(data) && this.error === '' ) this.router.navigateByUrl('/home')
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

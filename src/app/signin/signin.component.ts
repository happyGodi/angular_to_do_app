import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  users!: User[]

  signInForm = this.formBuiler.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(data: any){
    this.userService.signIn(data)
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    console.log(this.users)
   }

  constructor(
    private userService: UserService,
    private formBuiler: FormBuilder
  ){}

}

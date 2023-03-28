import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { User } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  users!: User[]

  signUpForm = this.formBuiler.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(data: any){
    this.userService.addUser(data)
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

import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { User } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface Res {
  token: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  users!: Observable<User[]>
  error = ''

  signUpForm = this.formBuiler.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  onSubmit(data: any){
    try {
      this.userService.signUp(data).subscribe((res: Res) => {
        sessionStorage.setItem('access_token', res.token)
        this.router.navigate(['/home'])
      })
    } catch (e: any) {
      this.error = e
      setTimeout(() => {
        this.error = ''
      }, 3000);
    }
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    console.log(this.users)
   }

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuiler: FormBuilder
  ){}
}

import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { User, Res } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  users!: Observable<User[]>
  error = ''
  private isPassword: boolean = false
  type = 'password'

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
        this.cookieService.set('user', JSON.stringify({
          name: res.name,
          username: res.username,
          email: res.email
        }))
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

   showPass(): void {
    this.isPassword = !this.isPassword
    this.isPassword ? this.type = 'text' : this.type = 'password'
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuiler: FormBuilder,
    private cookieService: CookieService
  ){}
}

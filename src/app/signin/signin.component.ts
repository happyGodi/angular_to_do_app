import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/types/user-type';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

interface Res {
  token: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  users!: Observable<User[]>
  error = ''

  signInForm = this.formBuiler.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(data: any){
    try {
      this.userService.signIn(data).subscribe((res: Res) => {
        sessionStorage.setItem('access_token', res.token)
        this.router.navigate(['/home'])
      })
    } catch (e: any) {
      this.error = e.message
      console.log(e)
      setTimeout(() => {
        this.error = ''
      }, 3000);
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/types/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      "username": "jack",
      "password": "jack"
     }
  ]

  signIn(user: User){
      this.users.find((u: User) => u.username === user.username && u.password === user.password) ? console.log('user found!') : console.log('Not found!')
  }
  addUser(user: User){
    this.users.push(user)
    console.log(this.users)
    //this.http.post<User>('assets/users.json', user).subscribe(res => window.alert(res))
  }
  getUsers(){ return this.users}
  getUsersJson(){ return this.http.get<User[]>('assets/users.json')}

  constructor(
    private http: HttpClient
  ) { }
}

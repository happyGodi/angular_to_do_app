import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/types/user-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3030/'

  signIn(user: User): Observable<any> { return this.http.post(this.url + 'users/login', user) }

<<<<<<< HEAD
  signUp(user: User): Observable<any> { return this.http.post(this.url + 'users/register', user) }
=======
  signUp(user: User) { this.http.post(this.url + 'users/register', user) }
>>>>>>> d247ca24e468a6b888e78abaf1db6064638867cc

  getUsers(){ return this.http.get<User[]>(this.url + 'users') }

  constructor(
    private http: HttpClient
  ) { }
}

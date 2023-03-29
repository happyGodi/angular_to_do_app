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

  signUp(user: User): Observable<any> { return this.http.post(this.url + 'users/register', user) }

  getUsers(){ return this.http.get<User[]>(this.url + 'users') }

  constructor(
    private http: HttpClient
  ) { }
}

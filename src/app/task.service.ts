import { Injectable } from '@angular/core';
import { Task } from 'src/types/task-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = 'http://localhost:3030/'

  private token = sessionStorage.getItem('access_token');

  addTask(task: Task) {

  }

  getTasks(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + this.token);
    return this.http.get<Task[]>(this.url + 'tasks', { headers })
  }

  deleteTask(id: number){

  }

  resetTask(){
  }

  constructor(
    private http: HttpClient
  ) { }
}

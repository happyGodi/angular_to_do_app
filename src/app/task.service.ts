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

<<<<<<< HEAD
  deleteTask(id: string){
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + this.token);
    this.http.delete(this.url + 'tasks/delete/' + id, { headers })
=======
  deleteTask(id: number){

>>>>>>> d247ca24e468a6b888e78abaf1db6064638867cc
  }

  resetTask(){
  }

  constructor(
    private http: HttpClient
  ) { }
}

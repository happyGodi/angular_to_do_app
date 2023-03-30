import { Injectable } from '@angular/core';
import { Task } from 'src/types/task-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url: string = 'http://localhost:3030/';

  addTask(task: object, token: string): Observable<Task> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.post(this.url + 'tasks', task, { headers }) as Observable<Task>
  }

  getTasks(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.get<Task[]>(this.url + 'tasks', { headers });
  }

  deleteTask(id: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.delete(this.url + 'tasks/delete/' + id, { headers });
  }

  resetTask() {}

  constructor(private http: HttpClient) {}
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  doneTask(task: Task): Observable<Object> {
    return this.http.put(`${this.url}/${task.id}`, task);
  }

  removeTask(task: Task): Observable<Object> {
    return this.http.delete(`${this.url}/${task.id}`);
  }

}

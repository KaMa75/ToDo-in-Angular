import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly url = 'http://localhost:3000/tasks';
  readonly getParam: HttpParams;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getTasks();
    const uid = this.authService.user.uid;
    this.getParam = new HttpParams().set('q', uid);
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url, { params: this.getParam });
  }

  addTask(tasks: Array<Task>) {
    tasks.forEach(task => {
      this.http.post<Task>(this.url, task).subscribe();
    });
  }

  doneTask(task: Task): Observable<Object> {
    return this.http.put(`${this.url}/${task.id}`, task);
  }

  removeTask(task: Task): Observable<Object> {
    return this.http.delete(`${this.url}/${task.id}`);
  }

}

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
    this.getTasks().subscribe(tasks => {console.log(tasks)});
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    console.log(JSON.stringify(task));
    return this.http.post<Task>(this.url, task);
  }

}

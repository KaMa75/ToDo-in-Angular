import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(tasks => {
      this.tasksListObs.next(tasks);
    });
  }

  addTask(tasks: Array<Task>) {
    // this.httpService.addTask(tasks).subscribe(task => {console.log(task)});
    const list = this.tasksListObs.getValue().concat(tasks);
    this.tasksListObs.next(list);
  }

  removeTask(task: Task) {
    const list = this.tasksListObs.getValue().filter(element => element !== task);
    this.httpService.removeTask(task).subscribe(taskObs => {
      console.log(taskObs);
    });
    this.tasksListObs.next(list);
  }

  doneTask(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    this.httpService.doneTask(task).subscribe();
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  clearDoneList() {
    const list = this.tasksListObs.getValue().filter(element => !element.isDone);
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

}

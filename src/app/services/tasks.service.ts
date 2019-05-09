import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksList: Array<Task> = [];
  // private doneTasksList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>(this.tasksList);
  // private doneTasksListObs = new BehaviorSubject<Array<Task>>(this.doneTasksList);

  constructor() {
    this.tasksList = [
      {name: 'Nauka Angulara', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
      {name: 'Zdobycie pracy', created: new Date().toLocaleString(), isDone: false},
      {name: 'Zdobywać doświadczenie', created: new Date().toLocaleString(), isDone: false},
      {name: 'Zostać FullStackiem', created: new Date().toLocaleString(), isDone: false}
    ];
    this.tasksListObs.next(this.tasksList);
  }

  addTask(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  removeTask(index: number) {
    this.tasksList.splice(index, 1);
    this.tasksListObs.next(this.tasksList);
  }

  doneTask(index: number) {
    const tempTask = this.tasksList.splice(index, 1)[0];
    tempTask.end = new Date().toLocaleString();
    // this.doneTasksList.push(tempTask);
    this.tasksListObs.next(this.tasksList);
    // this.doneTasksListObs.next(this.doneTasksList);
  }

  clearDoneList() {
    // this.doneTasksList = [];
    // this.doneTasksListObs.next(this.doneTasksList);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  // getDoneTasksListObs(): Observable<Array<Task>> {
  //   return this.doneTasksListObs.asObservable();
  // }

}

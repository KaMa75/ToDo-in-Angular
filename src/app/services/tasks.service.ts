import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasksList = [
      {id: '0', name: 'Nauka Angulara', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
      {id: '1', name: 'Zdobycie pracy', created: new Date().toLocaleString(), isDone: false},
      {id: '2', name: 'Zdobywać doświadczenie', created: new Date().toLocaleString(), isDone: false},
      {id: '3', name: 'Zostać FullStackiem', created: new Date().toLocaleString(), isDone: false}
    ];
    this.tasksListObs.next(tasksList);
  }

  addTask(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  removeTask(task: Task) {
    const list = this.tasksListObs.getValue().filter(element => element !== task);
    this.tasksListObs.next(list);
  }

  doneTask(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
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

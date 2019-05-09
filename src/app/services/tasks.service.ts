import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>(this.tasksList);

  constructor() {
    this.tasksList = [
      {id: '0', name: 'Nauka Angulara', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
      {id: '1', name: 'Zdobycie pracy', created: new Date().toLocaleString(), isDone: false},
      {id: '2', name: 'Zdobywać doświadczenie', created: new Date().toLocaleString(), isDone: false},
      {id: '3', name: 'Zostać FullStackiem', created: new Date().toLocaleString(), isDone: false}
    ];
    this.tasksListObs.next(this.tasksList);
  }

  findIndex(id: string): number {
    let index: number;

    this.tasksList.forEach((task, i) => {
      if(task.id === id) {
        index = i;
      }
    });

    return index;
  }

  addTask(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  removeTask(index: number) {
    this.tasksList.splice(index, 1);
    this.tasksListObs.next(this.tasksList);
  }

  doneTask(id: string) {
    const index: number = this.findIndex(id);

    this.tasksList[index].end = new Date().toLocaleString();
    this.tasksList[index].isDone = true;
    this.tasksListObs.next(this.tasksList);
  }

  clearDoneList() {
    // this.doneTasksList = [];
    // this.doneTasksListObs.next(this.doneTasksList);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

}

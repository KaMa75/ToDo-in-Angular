import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksList: Array<string> = [];
  private doneTasksList: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  private doneTasksListObs = new BehaviorSubject<Array<string>>(this.doneTasksList);

  constructor() {
    this.tasksList = ['Nauka Angulara', 'Zdobycie pracy', 'Zdobywać doświadczenie', 'Zostać FullStackiem'];
    this.tasksListObs.next(this.tasksList);
  }

  addTask(task: string) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
    console.log(this.tasksList)
  }

  removeTask(index: number) {
    this.tasksList.splice(index, 1);
    this.tasksListObs.next(this.tasksList);
  }

  doneTask(index: number) {
    const tempTask = this.tasksList.splice(index, 1)[0];
    this.doneTasksList.push(tempTask);
    this.doneTasksListObs.next(this.doneTasksList);
  }

  clearDoneList() {
    this.doneTasksList = [];
    this.doneTasksListObs.next(this.doneTasksList);
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getDoneTasksListObs(): Observable<Array<string>> {
    return this.doneTasksListObs.asObservable();
  }

}

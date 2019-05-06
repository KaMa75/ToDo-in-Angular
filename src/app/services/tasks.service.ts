import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];

  constructor() {
    this.tasksList = ['Nauka Angulara', 'Zdobycie pracy', 'Zdobywać doświadczenie', 'Zostać FullStackiem'];
  }

  addTask(task: string) {
    this.tasksList.push(task);
  }

  removeTask(index: number) {
    this.tasksList.splice(index, 1);
  }

  doneTask(index: number) {
    const tempTask = this.tasksList.splice(index, 1)[0];
    this.doneTasksList.push(tempTask);
  }

  clearDoneList() {
    this.doneTasksList = [];
  }
}

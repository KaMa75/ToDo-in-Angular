import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTaskInputPlaceholder = 'Wpisz nowe zadanie';
  newTask: string;
  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];

  addTask() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
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

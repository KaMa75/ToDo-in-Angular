import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];

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

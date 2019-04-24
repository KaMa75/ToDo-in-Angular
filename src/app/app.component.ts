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

  addTask() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);
  }

  removeTask(index: number) {
    this.tasksList.splice(index, 1);
  }
}

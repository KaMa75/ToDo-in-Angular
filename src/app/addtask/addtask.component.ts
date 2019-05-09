import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  newTaskInputPlaceholder = 'Wpisz nowe zadanie';
  newTask: string;

  constructor(private tasksService: TasksService) { }

  addTask() {
    const task: Task = {name: this.newTask, created: new Date().getDay.toLocaleString(), isDone: false};
    this.tasksService.addTask(task);
    this.newTask = '';
  }

  ngOnInit() {
  }

}

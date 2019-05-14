import { TasksService } from './../services/tasks.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Task } from '../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(task => !task.isDone).slice();
    });
  }

  removeTask(task: Task) {
    this.tasksService.removeTask(task);
  }

  doneTask(task: Task) {
    this.tasksService.doneTask(task);
  }

  getColor() {
    const length = this.tasksList.length;
    let color: string;
    if(length < 5) {
      color = 'green';
    } else if (length < 9) {
      color = 'orange';
    } else {
      color = 'red';
    }
    return color;
  }

  ngOnInit() {
  }

}

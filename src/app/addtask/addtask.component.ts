import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  newTaskInputPlaceholder = 'Wpisz nowe zadanie';
  newTask: string;

  constructor(private tasksService: TasksService, private router: Router) { }

  addTask() {
    const task: Task = {name: this.newTask, created: new Date().toLocaleString(), isDone: false};
    this.tasksService.addTask(task);
    this.newTask = '';
    this.router.navigate(['tasks']);
  }

  ngOnInit() {
  }

}

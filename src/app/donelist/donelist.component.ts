import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.css']
})
export class DonelistComponent implements OnInit {

  doneTasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.doneTasksList = tasks.filter(task => task.isDone);
    });
  }

  clearDoneList() {
    this.tasksService.clearDoneList();
  }

  ngOnInit() {
  }

}

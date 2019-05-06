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
    this.tasksService.getDoneTasksListObs().subscribe((tasks: Array<Task>) => {
      this.doneTasksList = tasks;
    });
  }

  clearDoneList() {
    this.tasksService.clearDoneList();
  }

  ngOnInit() {
  }

}

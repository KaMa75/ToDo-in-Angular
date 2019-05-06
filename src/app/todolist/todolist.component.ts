import { TasksService } from './../services/tasks.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistComponent implements OnInit {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  removeTask(index: number) {
    this.tasksService.removeTask(index);
  }

  doneTask(index: number) {
    this.tasksService.doneTask(index);
  }

  getColor() {
    // const length = this.tasksList.length;
    // let color: string;
    // if(length < 5) {
    //   color = 'green';
    // } else if(length < 9) {
    //   color = 'orange';
    // } else {
    //   color = 'red';
    // }
    // return color;
  }

  ngOnInit() {
  }

}

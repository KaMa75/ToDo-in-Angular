import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

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
    this.tasksService.addTask(this.newTask);
    this.newTask = '';
  }

  ngOnInit() {
  }

}

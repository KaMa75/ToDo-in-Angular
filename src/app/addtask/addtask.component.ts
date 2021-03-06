import { AuthService } from './../auth/auth.service';
import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  addForm: FormGroup;

  newTaskInputPlaceholder = 'Wpisz nowe zadanie';

  constructor(private tasksService: TasksService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  addTask() {
    const tasksList: Array<Task> = this.createTaskList();
    this.tasksService.addTask(tasksList);
    this.addForm = this.initForm();
    this.router.navigate(['tasks']);
  }

  createTaskList(): Array<Task> {
    const tasksArr = <[string]>this.addForm.get('taskName').value;
    const tasks =  tasksArr.map(task => {
      return {name: task, userId: this.authService.user.uid, created: new Date().toLocaleString(), isDone: false};
    });
    return tasks;
  }

  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  newTaskInputPlaceholder = 'Wpisz nowe zadanie';
  newTask: string;
  @Output() emitTask = new EventEmitter<string>();

  addTask() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }

  constructor() { }

  ngOnInit() {
  }

}

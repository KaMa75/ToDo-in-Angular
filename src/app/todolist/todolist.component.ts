import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistComponent implements OnInit {

  @Input() tasksList = [];
  @Output() emitRemove = new EventEmitter<number>();
  @Output() emitDone = new EventEmitter<number>();

  removeTask(index: number) {
    this.emitRemove.emit(index);
  }

  doneTask(index: number) {
    this.emitDone.emit(index);
  }

  getColor() {
    const length = this.tasksList.length;
    let color: string;
    if(length < 5) {
      color = 'green';
    } else if(length < 9) {
      color = 'orange';
    } else {
      color = 'red';
    }
    return color;
  }

  constructor() { }

  ngOnInit() {
  }

}

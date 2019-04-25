import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
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

  constructor() { }

  ngOnInit() {
  }

}

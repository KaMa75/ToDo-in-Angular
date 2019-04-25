import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.css']
})
export class DonelistComponent implements OnInit {

  @Input() doneTasksList = [];
  @Output() emitClear = new EventEmitter();

  clearDoneList() {
    this.emitClear.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

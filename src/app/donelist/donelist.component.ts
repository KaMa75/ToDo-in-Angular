import { TasksService } from './../services/tasks.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.css']
})
export class DonelistComponent implements OnInit {

  doneTasksList: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getDoneTasksListObs().subscribe((tasks: Array<string>) => {
      this.doneTasksList = tasks;
    });
  }

  clearDoneList() {
    this.tasksService.clearDoneList();
  }

  ngOnInit() {
  }

}

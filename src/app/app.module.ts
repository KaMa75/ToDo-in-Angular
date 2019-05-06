import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DonelistComponent } from './donelist/donelist.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    TodolistComponent,
    DonelistComponent,
    CheckedDirective,
    DateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

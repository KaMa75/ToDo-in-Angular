import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { DonelistComponent } from './donelist/donelist.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'add-task',
    component: AddtaskComponent
  },
  {
    path: 'tasks',
    component: TodolistComponent
  },
  {
    path: 'done',
    component: DonelistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {

}

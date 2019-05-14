import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { DonelistComponent } from './donelist/donelist.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { LoginComponent } from './auth/login/login.component';
import { GuardService } from './auth/guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'add-task',
    component: AddtaskComponent,
    canActivate: [GuardService]
  },
  {
    path: 'tasks',
    component: TodolistComponent,
    canActivate: [GuardService]
  },
  {
    path: 'done',
    component: DonelistComponent,
    canActivate: [GuardService]
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

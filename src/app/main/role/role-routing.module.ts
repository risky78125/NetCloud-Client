import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleComponent} from './role.component';
import {RoleUpdateComponent} from './role-update/role-update.component';

const routes: Routes = [
  {path: '', component: RoleComponent},
  {path: 'add', component: RoleUpdateComponent},
  {path: 'modify', component: RoleUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }

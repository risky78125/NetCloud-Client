import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleComponent} from './role.component';
import {RoleEditorComponent} from './role-editor/role-editor.component';

const routes: Routes = [
  {path: '', component: RoleComponent},
  {path: 'add', component: RoleEditorComponent},
  {path: 'modify/:roleId', component: RoleEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }

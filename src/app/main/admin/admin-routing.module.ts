import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminEditorComponent} from './admin-editor/admin-editor.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
  {
    path: 'add', component: AdminEditorComponent
  },
  {
    path: 'modify/:adminId', component: AdminEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

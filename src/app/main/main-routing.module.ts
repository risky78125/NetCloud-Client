import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {IndexModule} from './index/index.module';
import {RoleModule} from './role/role.module';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {
        path: 'index', loadChildren: () => IndexModule
      },
      {
        path: 'role', loadChildren: () => RoleModule
      },
      {
        path: 'admin', loadChildren: () => AdminModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

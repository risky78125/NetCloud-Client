import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainModule} from './main/main.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: 'main', loadChildren: () => MainModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}

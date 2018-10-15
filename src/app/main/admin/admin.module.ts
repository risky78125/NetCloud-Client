import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminService} from './admin.service';
import {CommonsModule} from '../../commons/commons.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent],
  providers: [AdminService]
})
export class AdminModule { }

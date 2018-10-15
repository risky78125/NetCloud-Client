import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminService} from './admin.service';
import {CommonsModule} from '../../commons/commons.module';
import {FormsModule} from '@angular/forms';
import { AdminEditorComponent } from './admin-editor/admin-editor.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminEditorComponent],
  providers: [AdminService]
})
export class AdminModule { }

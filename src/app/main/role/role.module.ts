import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoleRoutingModule} from './role-routing.module';
import {RoleComponent} from './role.component';
import {DevextremeWidgetModule} from '../../devextreme-widget/devextreme-widget.module';
import {CommonsModule} from '../../commons/commons.module';
import {RoleEditorComponent} from './role-editor/role-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoleService} from './role.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DevextremeWidgetModule,
    CommonsModule,
    // ReactiveFormsModule,
    RoleRoutingModule
  ],
  declarations: [RoleComponent, RoleEditorComponent],
  providers: [RoleService]
})
export class RoleModule {
}

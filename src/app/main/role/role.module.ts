import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoleRoutingModule} from './role-routing.module';
import {RoleComponent} from './role.component';
import {DevextremeWidgetModule} from '../../devextreme-widget/devextreme-widget.module';
import {CommonsModule} from '../../commons/commons.module';
import {RoleUpdateComponent} from './role-update/role-update.component';

@NgModule({
  imports: [
    CommonModule,
    DevextremeWidgetModule,
    CommonsModule,
    RoleRoutingModule
  ],
  declarations: [RoleComponent, RoleUpdateComponent]
})
export class RoleModule {
}

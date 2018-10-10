import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {DevextremeWidgetModule} from '../devextreme-widget/devextreme-widget.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
  imports: [
    CommonModule,
    DevextremeWidgetModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, NavigationMenuComponent]
})
export class MainModule { }

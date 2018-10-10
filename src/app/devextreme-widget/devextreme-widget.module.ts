import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevExtremeModule} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DevExtremeModule
  ],
  exports: [
    DevExtremeModule
  ],
  declarations: []
})
export class DevextremeWidgetModule { }

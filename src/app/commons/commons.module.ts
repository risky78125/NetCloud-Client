import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsTableComponent } from './commons-table/commons-table.component';
import { PageIndicatorComponent } from './page-indicator/page-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonsTableComponent, PageIndicatorComponent],
  exports: [CommonsTableComponent, PageIndicatorComponent]
})
export class CommonsModule { }

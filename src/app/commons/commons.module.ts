import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsTableComponent } from './commons-table/commons-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonsTableComponent],
  exports: [CommonsTableComponent]
})
export class CommonsModule { }

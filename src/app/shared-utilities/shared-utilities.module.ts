import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFilter } from './filters/car-filter/car-filter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarFilter
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CarFilter
  ]
})
export class SharedUtilitiesModule { }

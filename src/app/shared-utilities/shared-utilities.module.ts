import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFilter } from './filters/car-filter/car-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CarFilter
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    CarFilter
  ]
})
export class SharedUtilitiesModule { }

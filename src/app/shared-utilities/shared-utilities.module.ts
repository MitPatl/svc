import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFilter } from './filters/car-filter/car-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { DateFilterComponent } from './filters/date-filter/date-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CarFilter,
    DateFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CarFilter,
    DateFilterComponent
  ],
  providers: []
})
export class SharedUtilitiesModule { }

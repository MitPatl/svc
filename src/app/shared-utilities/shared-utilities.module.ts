import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFilter } from './filters/car-filter/car-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { DateFilterComponent } from './filters/date-filter/date-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [
    CarFilter,
    DateFilterComponent
  ],
  providers: [MatDatepickerModule]
})
export class SharedUtilitiesModule { }

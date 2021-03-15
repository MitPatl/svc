import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './modules.routing';
import { PrimeNgModule } from '../shared-utilities/prime-ng/prime-ng.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LocationDetailsComponent } from './location-details/location-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    LocationDetailsComponent,
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule,
    routing,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }

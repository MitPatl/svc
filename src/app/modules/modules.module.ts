import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './modules.routing';
import { PrimeNgModule } from '../shared-utilities/prime-ng/prime-ng.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { CustomerListComponent } from './dashboard/components/customer-list/customer-list.component';
import { SharedService } from '../shared-utilities/shared.service';
import { AgGridModule } from 'ag-grid-angular';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { AddFleetComponent } from './add-cars/components/add-fleet/add-fleet.component';
import { ArchiveFleetComponent } from './add-cars/components/archive-fleet/archive-fleet.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    LocationDetailsComponent,
    CustomerListComponent,
    AddCarsComponent,
    AddFleetComponent,
    ArchiveFleetComponent,
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule,
    routing,
    PrimeNgModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    SharedService
  ]
})
export class ModulesModule { }

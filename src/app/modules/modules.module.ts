import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './modules.routing';
import { PrimeNgModule } from '../shared-utilities/prime-ng/prime-ng.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule,
    routing,
    PrimeNgModule,
    AgGridModule,
  ]
})
export class ModulesModule { }

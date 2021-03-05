import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './modules.routing';
import { PrimeNgModule } from '../shared-utilities/prime-ng/prime-ng.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AgGridModule } from 'ag-grid-angular';
import { PopupOverlayComponent } from './popup-overlay/popup-overlay.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    PopupOverlayComponent,
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule,
    routing,
    PrimeNgModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }

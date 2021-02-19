import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './modules.routing';
import { PrimeNgModule } from '../shared-utilities/prime-ng/prime-ng.module';
import { SideBarComponent } from './side-bar/side-bar.component';



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
    PrimeNgModule
  ]
})
export class ModulesModule { }

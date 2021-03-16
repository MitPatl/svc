import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig, MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-location-details',
  providers: [MessageService],
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  items: MenuItem[] = [];
  messageService: any;
    
  constructor(private primengConfig: PrimeNGConfig, messageService: MessageService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.items = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
      }}
    ];
  }
  initOverlays() {
    throw new Error('Method not implemented.');
  }

  displayDialog: boolean = false;

  displayMaximizable: boolean = false;

    showBasicDialog() {
        this.displayDialog = true;
    }

    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

  save(severity: string) {
      this.messageService.add({severity: severity, summary:'Success', detail:'Data Saved'});
  }
  
  update() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }
  
  delete() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }

}


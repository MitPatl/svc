import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig, MessageService, MenuItem } from 'primeng/api';
import {  } from 'googlemaps';

@Component({
  selector: 'app-location-details',
  providers: [MessageService],
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  items: MenuItem[] = [];
  messageService: any;
  @ViewChild('map') mapElement: any;
  map: any;
    
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

    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
    
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


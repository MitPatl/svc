import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-popup-overlay',
  providers: [MessageService],
  templateUrl: './popup-overlay.component.html',
  styleUrls: ['./popup-overlay.component.scss']
})
export class PopupOverlayComponent implements OnInit {
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService, MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/shared-utilities/shared.service';


@Component({
  selector: 'app-location-details',
  providers: [MessageService],
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  items: MenuItem[] = [];
  messageService: any;
  displayDialog: boolean = false;

  displayMaximizable: boolean = false;
  selectedData: any[] =[];
  nextData: any;
  customers: any[] = [];
  prevbtn: boolean = false;
  nextbtn: boolean = false;
  generalForm: FormGroup = this.fb.group({});
  addressForm: FormGroup = this.fb.group({});
  prevName: any;
  nextName: any; 
    
  constructor(
    public sharedService: SharedService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
    this.generalForm = this.fb.group({
      locationName: this.fb.control(''),
      locationRef: this.fb.control(''),
      locationType: this.fb.control(''),
      locationGroup: this.fb.control('')
    });

    this.addressForm = this.fb.group({
      locationName: this.fb.control(''),
      locationRef: this.fb.control(''),
      locationType: this.fb.control(''),
      locationGroup: this.fb.control('')
    });

    this.generalForm.disable();
    this.addressForm.disable();

    this.items = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
      }}
    ];

    this.sharedService.selectedCustomer.subscribe(resp => {
      this.selectedData = [];
      this.customers = [];
      this.showMaximizableDialog();
      this.selectedData.push(resp.list[resp.index]);
      
      this.customers = resp.list;
      this.nextData = resp.index;
      if(this.customers.length === 1) {
        // this.nextbtn = true;
        // this.prevbtn = true;
        this.nextName = resp.list[resp.index].Asset;
        this.prevName = '';
      } else if(this.nextData === 0) {
        // this.nextbtn = false;
        // this.prevbtn = true;
        this.nextName = resp.list[resp.index].Asset;
        this.prevName = resp.list[this.customers.length - 1].Asset;
      } else if(this.nextData + 1 === this.customers.length) {
        // this.nextbtn = true;
        // this.prevbtn = false;
        this.nextName = resp.list[resp.index].Asset;
        this.prevName = resp.list[resp.index-1].Asset;
      } else {
        this.nextName = resp.list[resp.index].Asset;
      }
    })
  }
  initOverlays() {
    throw new Error('Method not implemented.');
  }

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

  prev() {
    // if(this.nextData > 0) {
      this.selectedData = [];
      
      if(this.nextData === 0) {
        this.nextData = this.customers.length - 1;
        this.prevName = this.customers[this.nextData - 1].Asset;
        this.nextName = this.customers[this.nextData].Asset;
        this.selectedData.push(this.customers[this.nextData]);
      } else {
        this.nextbtn = false;
        this.nextData--;
        if(this.nextData === 0) {
          this.prevName = this.customers[this.customers.length - 1].Asset;
        } else {
          this.prevName = this.customers[this.nextData - 1].Asset;
        }
        
        this.nextName = this.customers[this.nextData].Asset;
        this.selectedData.push(this.customers[this.nextData]);
      }
    // }
  }

  next() {
    //if(this.nextData + 1 < this.customers.length) {
      this.selectedData = [];
      
      if(this.nextData+1 === this.customers.length) {
        this.nextData = 0;
        //this.prevName = this.customers[this.nextData - 1].Asset;
        this.nextName = this.customers[this.nextData].Asset;
        this.selectedData.push(this.customers[this.nextData]);

      } else {
        this.nextData++;
        this.prevName = this.customers[this.nextData - 1].Asset;
        this.nextName = this.customers[this.nextData].Asset;
        this.selectedData.push(this.customers[this.nextData]);
      }
    //}
  }

}


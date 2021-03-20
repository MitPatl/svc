import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared-utilities/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers: any[]=[];
  public selectedCustomers: any;
  loading: boolean = true;

  
  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.customers = [
      {
        id:1,
        name: 'UTLX 123456',
        fleet: 'Polyols',
        le: 'E',
        origin: 'A516 Bulk Plus Logistics',
        o: 'ON',
        destination: 'GEISMAR',
        d: 'LA',
        departure: '2020/02/15 7:39',
        eta: '2020/03/05 8:59',
        arrival: 'Late',
        location: 'Memphis',
        type: 'Customer',
        description:'',
        address: 'Parque Industrial 2000',
        city: 'Puebla',
        spc:'MX',
        reference:'150021-MX'
      },{
        id: 2,
        name: 'UTLX 123499',
        fleet: 'Polyols',
        le: 'E',
        origin: 'NOPB Main',
        o: 'ON',
        destination: 'GEISMAR',
        d: 'LA',
        departure: '2020/02/15 7:39',
        eta: '2020/03/05 8:59',
        arrival: 'Late',
        location: 'Memphis',
        type: 'Customer',
        description:'',
        address: 'Parque Industrial 2000',
        city: 'Puebla',
        spc:'MX',
        reference:'150021-MX'
      },{
        id: 3,
        name: 'UTLX 345533',
        fleet: 'MDI',
        le: 'E',
        origin: 'A5563_Salt Lake City',
        o: 'UT',
        destination: 'GEISMAR',
        d: 'LA',
        departure: '2020/02/18 5:39',
        eta: '2020/03/01 6:59',
        arrival: 'On Time',
        location: 'Laredo',
        type: 'Customer',
        description:'',
        address: 'Parque Industrial 2000',
        city: 'Puebla',
        spc:'MX',
        reference:'150021-MX'
      }
    ]
  }

  onRowSelect(event: any) {
    let index = this.customers.findIndex(resp => this.selectedCustomers.id === resp.id);
    let obj = {
      index: index,
      list: this.customers
    }
    this.sharedService.selectedCustomer.next(obj);
  }

}

import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { SharedService } from 'src/app/shared-utilities/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  public customers: any[]=[];
  public selectedCustomers: any;
  loading: boolean = true;
  columnDefs: any[]=[];
  pagination: boolean = true;
  paginationPageSize: number = 10;

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

    this.columnDefs = [
      { field: 'name' , checkboxSelection: true},
      { field: 'le', width: '80px'  },
      { field: 'origin'},
      { field: 'o', width: '100px' },
      { field: 'destination', width: '130px' },
      { field: 'd', width: '100px'},
      { field: 'departure', width: '150px' },
      { field: 'eta' },
      { field: 'arrival', width: '100px'},
      { field: 'location'},
  ];
  }

  onRowSelect(event: any) {
    let index = this.customers.findIndex(resp => this.selectedCustomers.id === resp.id);
    let obj = {
      index: index,
      list: this.customers
    }
    this.sharedService.selectedCustomer.next(obj);
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    const selectedDataStringPresentation = selectedData.map(node => `${node.name}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}

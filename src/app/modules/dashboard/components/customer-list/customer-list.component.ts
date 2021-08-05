import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CarFilter } from 'src/app/shared-utilities/filters/car-filter/car-filter.component';
import { SharedService } from 'src/app/shared-utilities/shared.service';
import 'ag-grid-enterprise';
import { DateFilterComponent } from 'src/app/shared-utilities/filters/date-filter/date-filter.component';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  public customers: any[] = [];
  public customersData: any[]=[];
  public selectedCustomers: any;
  loading: boolean = true;
  columnDefs: any[]=[];
  pagination: boolean = true;
  paginationPageSize: number = 10;
  public frameworkComponents: any;
  public defaultColDef: any;
  public subscriptions: any = new Subscription();
  public gridOptions: any;

  constructor(
    public sharedService: SharedService
  ) { 
    
  }

  ngOnInit(): void {
    this.customers = [
          {
              "Asset": "UTLX 642494",
              "AssetId": 93217,
              "AssetGroup": "MDI",
              "AssetGroupId": 1229,
              "LoadStatus": "Empty",
              "Origin": "HIGH LEVEL",
              "OriginState": "AB",
              "Destination": "YOUNGWOOD:ST GABRIEL:GEISMAR",
              "DestinationState": "LA",
              "LocationName": "Fort Frances",
              "LocationState": "ON",
              "TripStatus": "Enroute",
              "DepartureDate": "2021-04-15T15:02:51.413",
              "Duration": "33082.11:00:00",
              "EtaDate": "2021-04-24T19:35:50.413",
              "EtaRailroadDate": "2021-04-22T13:00:00",
              "ArrivalStatus": "On Time",
              "Latitude": 48.613880157471,
              "Longitude": -93.446464538574,
              "WaybillIdentifier": "62723f4c-66b9-4c79-a9c1-a16c61341c2e",
              "WaybillDestination": "GEISMAR",
              "WaybillDestinationState": "LA",
              "TrainID": "X34241",
              "ClmCode": "P",
              "ClmSightingDate": "2021-04-15T13:05:00",
              "ClmCodeDescription": "Departure",
              "CareOfParty": "KINDER MORGAN LIQUID TERMINALS LLC",
              "RailRoad": "CN",
              "BOL": null,
              "SID": null,
              "Customer": "NORBORD INC.",
              "CustPO": null,
              "Product": "TN",
              "NetWeight": 0,
              "DefaultJsonData": null
          },
          {
              "Asset": "UTLX 660882",
              "AssetId": 92230,
              "AssetGroup": "MDI",
              "AssetGroupId": 1229,
              "LoadStatus": "Loaded",
              "Origin": "GEISMAR",
              "OriginState": "LA",
              "Destination": "BRIDGETON",
              "DestinationState": "MO",
              "LocationName": "Venice",
              "LocationState": "IL",
              "TripStatus": "Enroute",
              "DepartureDate": "2021-04-16T13:45:10",
              "Duration": "20512.14:00:00",
              "EtaDate": "2021-04-21T07:08:07",
              "EtaRailroadDate": "2021-04-16T12:00:00",
              "ArrivalStatus": "On Time",
              "Latitude": 38.685607910156,
              "Longitude": -90.210296630859,
              "WaybillIdentifier": "72884625-eb57-4ff7-be1c-14071e5e9364",
              "WaybillDestination": "BRIDGETON",
              "WaybillDestinationState": "MO",
              "TrainID": "",
              "ClmCode": "P",
              "ClmSightingDate": "2021-04-16T13:37:00",
              "ClmCodeDescription": "Departure",
              "CareOfParty": null,
              "RailRoad": "NS",
              "BOL": 72997090,
              "SID": "2932185",
              "Customer": "RUBICON LLC",
              "CustPO": "2020-00-04092",
              "Product": "TN",
              "NetWeight": 189000,
              "DefaultJsonData": null
          },
          {
              "Asset": "UTLX 683686",
              "AssetId": 102803,
              "AssetGroup": "MDI",
              "AssetGroupId": 1229,
              "LoadStatus": "Empty",
              "Origin": "GEISMAR",
              "OriginState": "LA",
              "Destination": "DEVON",
              "DestinationState": "KY",
              "LocationName": "Crescent Park",
              "LocationState": "KY",
              "TripStatus": "Enroute",
              "DepartureDate": "2021-04-17T10:07:04",
              "Duration": "00:00:00",
              "EtaDate": "2021-04-17T10:33:39",
              "EtaRailroadDate": "2021-04-19T23:00:00",
              "ArrivalStatus": "Late",
              "Latitude": 39.038341522217,
              "Longitude": -84.583206176758,
              "WaybillIdentifier": "d407bb4a-81de-4cf4-b075-054287b2e365",
              "WaybillDestination": "DEVON",
              "WaybillDestinationState": "KY",
              "TrainID": "",
              "ClmCode": "A",
              "ClmSightingDate": "2021-04-17T11:06:00",
              "ClmCodeDescription": "Arrival at an In - transit",
              "CareOfParty": "FIRESTONE BUILDING PRODUCTS CO",
              "RailRoad": "NS",
              "BOL": 80868474,
              "SID": "2930563",
              "Customer": "RUBICON LLC",
              "CustPO": "4570632684",
              "Product": "TN",
              "NetWeight": 188580,
              "DefaultJsonData": null
          },
          {
              "Asset": "UTLX 662192",
              "AssetId": 93250,
              "AssetGroup": "MDI",
              "AssetGroupId": 1229,
              "LoadStatus": "Empty",
              "Origin": "SALT LAKE CITY",
              "OriginState": "UT",
              "Destination": "YOUNGWOOD:ST GABRIEL:GEISMAR",
              "DestinationState": "LA",
              "LocationName": "El Dorado",
              "LocationState": "KS",
              "TripStatus": "Enroute",
              "DepartureDate": "2021-04-18T09:24:22",
              "Duration": "17999.21:30:00",
              "EtaDate": "2021-04-20T14:57:40.5",
              "EtaRailroadDate": "2021-04-22T01:00:00",
              "ArrivalStatus": "On Time",
              "Latitude": 37.902503967285,
              "Longitude": -96.807205200195,
             "WaybillIdentifier": "07dc77c1-160c-4441-80b2-438f79c2f8d2",
              "WaybillDestination": "GEISMAR",
              "WaybillDestinationState": "LA",
              "TrainID": "",
              "ClmCode": "P",
              "ClmSightingDate": "2021-04-18T14:40:00",
              "ClmCodeDescription": "Departure",
              "CareOfParty": "RUBICON LLC",
              "RailRoad": "BNSF",
              "BOL": null,
              "SID": null,
              "Customer": "RSI LOGISTICS INC",
              "CustPO": null,
              "Product": "TN",
              "NetWeight": null,
              "DefaultJsonData": null
          },
          {
              "Asset": "UTLX 683707",
              "AssetId": 102852,
              "AssetGroup": "MDI",
              "AssetGroupId": 1229,
              "LoadStatus": "Empty",
              "Origin": "SALT LAKE CITY",
              "OriginState": "UT",
              "Destination": "SALT LAKE CITY",
              "DestinationState": "UT",
              "LocationName": "El Dorado",
              "LocationState": "KS",
              "TripStatus": "Enroute",
              "DepartureDate": "2021-04-19T09:24:22",
              "Duration": "42122.05:00:00",
              "EtaDate": "2021-04-27T07:46:10",
              "EtaRailroadDate": "2021-04-22T01:00:00",
              "ArrivalStatus": "On Time",
              "Latitude": 37.90234375,
              "Longitude": -96.807281494141,
              "WaybillIdentifier": "0ad6143b-4a53-4954-aeff-ddd94bf4e87a",
              "WaybillDestination": "GEISMAR",
              "WaybillDestinationState": "LA",
              "TrainID": "",
              "ClmCode": "P",
              "ClmSightingDate": "2021-04-19T14:40:00",
              "ClmCodeDescription": "Departure",
              "CareOfParty": "RUBICON LLC",
              "RailRoad": "BNSF",
              "BOL": null,
              "SID": null,
              "Customer": "RSI LOGISTICS INC",
              "CustPO": null,
              "Product": "TN",
              "NetWeight": null,
              "DefaultJsonData": null
          },
          {
              "Asset": "UTLX 650532",
              "AssetId": 93249,
              "AssetGroup": "MDI",
              "AssetGroupId": 1229,
              "LoadStatus": "Empty",
              "Origin": "TOMAHAWK",
              "OriginState": "WI",
              "Destination": "TOMAHAWK",
              "DestinationState": "WI",
              "LocationName": "Schofield",
              "LocationState": "WI",
              "TripStatus": "Enroute",
              "DepartureDate": "2021-04-20T09:20:41",
              "Duration": "00:00:00",
              "EtaDate": "2021-04-20T15:05:04",
              "EtaRailroadDate": "2021-04-24T01:00:00",
              "ArrivalStatus": "Late",
              "Latitude": 44.928134918213,
              "Longitude": -89.601112365723,
              "WaybillIdentifier": "d138c7e4-3183-40cf-9986-63c9318fdfbd",
              "WaybillDestination": "GEISMAR",
              "WaybillDestinationState": "LA",
              "TrainID": "L58881",
              "ClmCode": "P",
              "ClmSightingDate": "2021-04-20T15:00:00",
              "ClmCodeDescription": "Departure",
              "CareOfParty": null,
              "RailRoad": "CN",
              "BOL": null,
              "SID": null,
              "Customer": "LOUISIANA PACIFIC CORP",
              "CustPO": null,
              "Product": "TN",
              "NetWeight": 0,
              "DefaultJsonData": null
          },
          
      ];
      
    this.customersData = this.customers;
    this.columnDefs = [
      { headerName: 'Car/Wagon', field: 'Asset' , checkboxSelection: true, filter: 'carFilter'},
      { headerName: 'Fleet', field: 'AssetGroup', width: '80px', filter: 'agMultiColumnFilter',
      filterParams: {
        buttons: ['apply', 'reset'],
        filters: [
          {
            filter: 'agTextColumnFilter'
          },
          { filter: 'agSetColumnFilter' }
        ],
        filterOptions: ['equals', 'notEqual'],
    }},
      {  headerName: 'L/E', field: 'LoadStatus', filter: 'agMultiColumnFilter', filterParams: {
        filters: [{
          filter: 'agTextColumnFilter',
          filterOptions: ['equals', 'notEqual'],
        },{
          filter: 'agSetColumnFilter'
        }],
        
        buttons: ['apply', 'reset'],
        debounceMs: 200
      }},
      { headerName: 'Origin', field: 'Origin', width: '100px' },
      { headerName: 'O', field: 'OriginState', width: '130px' },
      { headerName: 'Destination', field: 'Destination', width: '100px'},
      { headerName: 'D', field: 'DestinationState', width: '150px' },
      // { headerName: 'Departure', field: 'DepartureDate' , filter: 'dateFilter'},filter: 'agDateColumnFilter',
      { headerName: 'Departure', field: 'DepartureDate' , filter: 'agDateColumnFilter',filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 500,
        filterOptions: [
          {
              displayKey: 'equals',
              displayName: 'On',
              test: (filterValue: any, cellValue: any) => cellValue == null || new Date(new Date(cellValue).toLocaleDateString()).getTime() == new Date(new Date(filterValue).toLocaleDateString()).getTime(),
          },
          
          {
              displayKey: 'greaterThan',
              displayName: 'After',
              test: (filterValue: any, cellValue: any) => cellValue == null || new Date(new Date(cellValue).toLocaleDateString()).getTime() > new Date(new Date(filterValue).toLocaleDateString()).getTime(),
          },
          
          {
              displayKey: 'lessThan',
              displayName: 'Before',
              test: (filterValue: any, cellValue: any) => cellValue == null || new Date(new Date(cellValue).toLocaleDateString()).getTime() < new Date(new Date(filterValue).toLocaleDateString()).getTime()
          },
          
          {
              displayKey: 'notEqual',
              displayName: 'Not Equal To',
              test: (filterValue: any, cellValue: any) => cellValue == null || new Date(new Date(cellValue).toLocaleDateString()).getTime() != new Date(new Date(filterValue).toLocaleDateString()).getTime()
          },
          
          'inRange'
      ],
        browserDatePicker: true,
        comparator: function(filterLocalDateAtMidnight: any, cellValue: any) {
          if (cellValue == null) {
            return 0;
          }
          filterLocalDateAtMidnight = moment(filterLocalDateAtMidnight).format('MM/DD/YYYY');
          // var dateParts = cellValue.split('/');
          // var year = Number(dateParts[2]);
          // var month = Number(dateParts[1]) - 1;
          // var day = Number(dateParts[0]);
          var cellDate = moment(cellValue).format('MM/DD/YYYY');

          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },closeOnApply: true, valueFormatter: this.dateFormatter},
      { headerName: 'ETA Predicted', field: 'EtaDate', width: '100px', filter: 'agDateColumnFilter',filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 500,
        suppressAndOrCondition: true,
        comparator: function(filterLocalDateAtMidnight: any, cellValue: any) {
          if (cellValue == null) {
            return 0;
          }
          filterLocalDateAtMidnight = moment(filterLocalDateAtMidnight).format('MM/DD/YYYY');
          // var dateParts = cellValue.split('/');
          // var year = Number(dateParts[2]);
          // var month = Number(dateParts[1]) - 1;
          // var day = Number(dateParts[0]);
          var cellDate = moment(cellValue).format('MM/DD/YYYY');

          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },closeOnApply: true, valueFormatter: this.dateFormatter},
      { headerName: 'Arrival Status', field: 'ArrivalStatus'},
      { headerName: 'Code', field: 'ClmCode', width: '100px'},
      { headerName: 'Code Description', field: 'ClmCodeDescription'},
      { headerName: 'BOL#', field: 'BOL', width: '100px'},
      { headerName: 'ETA Deviation (FUTURE)', field: 'ETADeviation'},
      { headerName: 'Currency (FUTURE)', field: 'Currency'}
    ];

    this.defaultColDef = {
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 200,
      filter: true,
      menuTabs: ['filterMenuTab'],
      resizable: true,
    };

    this.frameworkComponents = {
      carFilter: CarFilter,
      dateFilter: DateFilterComponent
    };

    this.subscriptions.add(this.sharedService.searchSubject.subscribe(searchTextValue => {
        this.filterCarData(searchTextValue);
      })
    );

    this.subscriptions.add(this.sharedService.searchDateSubject.subscribe(searchTextValue => {
      this.filterDateData(searchTextValue);
    })
  );
  }

  dateFormatter(params: any) {
    return moment(params.value).format('MM/DD/YYYY HH:mm:ss');
  }

  filterCarData(data: any) {
    if(data){
      let filter: boolean = false;
      let filteredData: any[] = [];
      let doesNotExist: any[] = [];
      if(data && data.length) {
        for(let x=0; x<data.length; x++) {
          //filter = this.customers.filter(resp => (resp.Asset).toLowerCase() === data[x].carId.trim().toLowerCase());
          filter = false;
          this.customers.filter(resp => {
            if(resp.Asset.toLowerCase().indexOf(data[x].carId.trim().toLowerCase()) != -1){
              let exist = filteredData.filter(obj => obj.Asset === resp.Asset);
              filter = true;
              if(exist.length === 0){
                filteredData.push(resp);
              }
            }
          });

          if(!filter) {
            doesNotExist.push(data[x].carId);
          }
        }

        this.customersData = filteredData;
      } else {
        this.customersData = this.customers;
      }

      this.sharedService.searchDataNotExist.next(doesNotExist);
    }
  }

  filterDateData(data: any){
    if(data){
      let filteredData = [];
      if(data[0] && data[1] === '' && data[2] === '' && data[3] === '') {
       filteredData = this.customers.filter((item: any) => {
          return new Date (new Date(item.DepartureDate).toLocaleDateString()).getTime() === new Date(data[0]).getTime()
        });
      } else if(data[0] && data[1] && data[2] === '' && data[3] === '') {
        filteredData = this.customers.filter((item: any) => {
           return new Date(item.DepartureDate).getTime() === new Date(data[0] + ' ' + data[1]).getTime()
         });
       } else if(data[0] && data[1] === '' && data[2] && data[3] === '') {
        filteredData = this.customers.filter((item: any) => {
          return new Date (new Date(item.DepartureDate).toLocaleDateString()).getTime() >= new Date(data[0]).getTime() &&
          new Date (new Date(item.DepartureDate).toLocaleDateString()).getTime() <= new Date(data[2]).getTime();
         });
       } else if(data[0] && data[1] && data[2] && data[3] === '') {
        filteredData = this.customers.filter((item: any) => {
          return new Date(item.DepartureDate).getTime() >= new Date(data[0] + ' ' + data[1]).getTime() &&
          new Date (new Date(item.DepartureDate).toLocaleDateString()).getTime() <= new Date(data[2]).getTime();
         });
       } else if(data[0] === '' && data[1] === ''  && data[2] && data[3] === '' ) {
       filteredData = this.customers.filter((item: any) => {
        return new Date (new Date(item.DepartureDate).toLocaleDateString()).getTime() === new Date(data[2]).getTime()
        });
      } else if(data[0] === '' && data[1] === '' && data[2] && data[3]) {
        filteredData = this.customers.filter((item: any) => {
           return new Date(item.DepartureDate).getTime() === new Date(data[2] + ' ' + data[3]).getTime()
         });
       } else if(data[0] && data[1] === '' && data[2] && data[3]) {
        filteredData = this.customers.filter((item: any) => {
          return new Date (new Date(item.DepartureDate).toLocaleDateString()).getTime() >= new Date(data[0]).getTime() &&
          new Date(item.DepartureDate).getTime() <= new Date(data[2] + ' ' + data[3]).getTime();
         });
       } else {
       filteredData = this.customers.filter((item: any) => {
          return new Date(item.DepartureDate).getTime() >= new Date(data[0] + ' ' + data[1]).getTime() &&
                 new Date(item.DepartureDate).getTime() <= new Date(data[2] + ' ' + data[3]).getTime();
        });
      }
      
      this.customersData = filteredData;
    } else {
      this.customersData = this.customers;
    }
  }

  onRowSelect(event: any) {
    let index = this.customers.findIndex((resp: any) => this.selectedCustomers.Asset === resp.Asset);
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

  onRowSelected(obj: any) {
    if(!obj.node.selected) {
      obj.node.gridApi.focusController.clearFocusedCell()
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

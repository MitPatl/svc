import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() closeBar: EventEmitter<any> = new EventEmitter();
  @Input() displaySideBar: boolean = false;
  public continue: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeBar.emit(false);
    this.continue = false;
  }

  onContinue() {
    this.continue = true;
  }

  onBack() {
    this.continue = false;
  }

  columnDefs = [
      { field: 'TrainID' },
      { field: 'Carrier' },
      { field: 'Destination'},
      { field: 'D'}
  ];

  rowData = [
      { TrainID: 'TR-12345', Carrier: 'CN', Destination: 'GEISMAR', D:'LA' },
      { TrainID: 'TR-25896', Carrier: 'CN', Destination: 'GEISMAR', D:'LA' },
      { TrainID: 'UT-2698a', Carrier: 'SNF', Destination: 'Baltimore Harbor', D:'MD' },
      { TrainID: 'UT-78945', Carrier: 'SNF', Destination: 'Pittsburgh', D:'PA' },
      { TrainID: 'TR-12345', Carrier: 'SN', Destination: 'BRIDGETON', D:'MO' },      
  ];
    
}

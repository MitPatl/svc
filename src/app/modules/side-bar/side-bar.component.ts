import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public formGroup: FormGroup;
  public columnDefs: any[] = [
    { field: 'TrainID' },
    { field: 'Carrier' },
    { field: 'Destination'},
    { field: 'D'}
  ];

  public rowData: any[] = [
      { trainId: 'TR-12345', Carrier: 'CN', Destination: 'GEISMAR', D:'LA' },
      { trainId: 'TR-25896', Carrier: 'CN', Destination: 'GEISMAR', D:'LA' },
      { trainId: 'UT-2698a', Carrier: 'SNF', Destination: 'Baltimore Harbor', D:'MD' },
      { trainId: 'UT-78945', Carrier: 'SNF', Destination: 'Pittsburgh', D:'PA' },
      { trainId: 'TR-12345', Carrier: 'SN', Destination: 'BRIDGETON', D:'MO' },      
  ];

  public searchResults: any[] = [
    { trainId: 'TR-32344' },
    { trainId: 'TR-35435' },
    { trainId: 'TR-36322' },
    { trainId: 'TR-32333' },
    { trainId: 'TR-31543' },
    { trainId: 'TR-35443' },
    { trainId: 'TR-31222' }
  ];

  public filterResults: any[] = [];
  public searchList: any[]=[];

  constructor(
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.formGroup = this.fb.group({
      trackNumber: this.fb.control(''),
      unit: this.fb.control( true )
    });
  }

  ngOnInit(): void {
    this.formGroup.get('trackNumber')?.patchValue(this.rowData);
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

  onSearch(event: any) {
    if(event && event.query) {
      let filtered : any[] = [];
        let query = event.query;
        for(let i = 0; i < this.searchResults.length; i++) {
            let id = this.searchResults[i];
            if (id.trainId.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(id);
            }
        }
        
        this.filterResults = filtered;
    }
  }

  onSelect(event: any) {
    if(event) {
      this.searchList.push({
        name: event.trainId
      });
    }
  }

  onAdd(event: any) {
    if(event) {
      this.formGroup.get('trackNumber')?.patchValue([]);
      this.rowData.push({
        trainId: event.value,
        Carrier: 'CN', Destination: 'GEISMAR', D:'LA'
      })

      this.formGroup.get('trackNumber')?.patchValue(this.rowData);
    }
  }
    
}

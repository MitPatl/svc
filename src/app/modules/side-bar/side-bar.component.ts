import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public formSubmitted: boolean = false;
  public unitName: string = '';
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
      unit: this.fb.control( true ),
      unitName: this.fb.control('', [Validators.required])
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
    const unitName = this.formGroup.controls.unitName.value;
    if(this.formGroup.controls.unit.value) {
      if(this.formGroup.valid) {
        this.continue = true;
        this.unitName = unitName;
        this.formSubmitted = false;
      } else {
        this.formSubmitted = true;
      }
    } else {
      this.continue = true;
    }
  }

  onBack() {
    this.continue = false;
    this.formSubmitted = false;
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
      this.searchList = [];
      this.searchList.push({
        name: event.trainId
      });
    }
  }

  onAdd(event: any) {
    if(event) {
      this.formGroup.get('trackNumber')?.patchValue([]);
        
      if(event.value.indexOf(',') !== -1) {
        const data = event.value.split(',');
        if(data && data.length) {
          for(let x=0; x<data.length; x++) {
            this.rowData.push({
              trainId: data[x],
              Carrier: '', Destination: '', D: ''
            })
          }
        }
      } else {
        this.rowData.push({
          trainId: event.value,
          Carrier: 'CN', Destination: 'GEISMAR', D:'LA'
        })
      }
      

      this.formGroup.get('trackNumber')?.patchValue(this.rowData);
    }
  }
    
}

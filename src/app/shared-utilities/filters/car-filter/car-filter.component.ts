import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AgFilterComponent } from 'ag-grid-angular';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'carFilter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss']
})
export class CarFilter implements AgFilterComponent {
  params: any;
  filterText: string = '';
  searchList: any;
  public searchForm: FormGroup = this.fb.group({});
  public rowData: any[]=[];
  public noSearchData: any = '';
  private searchSubject: Subject<string> = new Subject();

  constructor(
    public fb: FormBuilder,
    public sharedService: SharedService
  ){

  }
// UTLX 642494, UTLX 642494, UTLX 660882,UTLX 683686
  agInit(params: any): void {
    this.params = params;

    this.searchForm = this.fb.group({
      trackNumber: this.fb.control('')
    })

    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTextValue => {
      this.filterData(searchTextValue);
    });

    this.sharedService.searchDataNotExist.subscribe(resp => {
      this.noSearchData = resp.toString();
    })
  }

  filterData(data: any){
    this.sharedService.searchSubject.next(data);
  }

  onKeyUpSearch(searchTextValue: any){
    this.searchSubject.next(searchTextValue.target.value);
  }

  doesFilterPass(params: any) {
    // make sure each word passes separately, ie search for firstname, lastname
    let passed = true;
    this.filterText
      .toLowerCase()
      .split(' ')
      .forEach((filterWord) => {
        const value = params;

        if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
          passed = false;
        }
      });

    return passed;
  }

  isFilterActive(): boolean {
    return this.filterText != null && this.filterText !== '';
  }

  getModel() {
    return { value: this.filterText };
  }

  setModel(model: any) {
    this.filterText = model.value;
  }

  onInputChanged() {
    this.params.filterChangedCallback();
  }

  onAddSearch(event: any) {
    if(event) {
      this.searchForm.get('trackNumber')?.patchValue([]);
      if(event.value.indexOf(',') !== -1) {
        const data = event.value.split(',');
        if(data && data.length) {
          for(let x=0; x<data.length; x++) {
            this.rowData.push({
              carId: data[x].trim()
            })
          }
        }
      } else {
        this.rowData.push({
          carId: event.value.trim()
        })
      }
      

      this.searchForm.get('trackNumber')?.patchValue(this.rowData);
    }
  }

  apply() {
    this.searchSubject.next(this.searchForm.controls.trackNumber.value);
    this.rowData = [];
  }
  clear() {
    this.rowData = [];
    this.searchForm.controls.trackNumber.patchValue([]);
    this.searchSubject.next(this.searchForm.controls.trackNumber.value);
  }
}

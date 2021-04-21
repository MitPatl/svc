import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AgFilterComponent } from 'ag-grid-angular';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'carFilter',
  templateUrl: './car-filter.component.html',
})
export class CarFilter implements AgFilterComponent {
  params: any;
  filterText: string = '';
  searchList: any;
  private searchSubject: Subject<string> = new Subject();

  constructor(
    public fb: FormBuilder,
    public sharedService: SharedService
  ){
    
  }

  agInit(params: any): void {
    this.params = params;

    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTextValue => {
      this.filterData(searchTextValue);
    });
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
}

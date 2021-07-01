import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AgFilterComponent, IDateAngularComp } from 'ag-grid-angular';
import { IDateParams } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'dateFilter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements IDateAngularComp {
  filterText: string = '';
  searchList: any;
  public searchForm: FormGroup = this.fb.group({});
  public rowData: any[]=[];
  public noSearchData: any = '';
  private searchDateSubject: Subject<any> = new Subject();
  pastedText: any;
   private date!: Date;
   private params!: IDateParams;
   private picker: any;

  constructor(
    public fb: FormBuilder,
    public sharedService: SharedService
  ){

  }
// UTLX 642494, UTLX 642494, UTLX 660882,UTLX 683686
  agInit(params: any): void {
    this.params = params;

    this.searchForm = this.fb.group({
      fromDate: this.fb.control(''),
      toDate: this.fb.control('')
    })

    this.searchDateSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTextValue => {
      this.filterData(searchTextValue);
    });

    this.sharedService.searchDataNotExist.subscribe(resp => {
      this.noSearchData = resp.toString();
    })
  }
  ngAfterViewInit(): void {
    
  }

  ngOnDestroy() {
      console.log(`Destroying DateComponent`);
  }

  onDateChanged(selectedDates: any) {
      this.date = selectedDates[0] || null;
      this.params.onDateChanged();
  }

  getDate(): Date {
      return this.date;
  }

  setDate(date: Date): void {
      this.date = date || null;
      this.picker.setDate(date);
  }

  setInputPlaceholder(placeholder: string): void {
      
  }

  setInputAriaLabel(label: string): void {
      
  }

  filterData(data: any){
    this.sharedService.searchDateSubject.next(data);
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

  onInputChanged() {
    
  }

  apply() {
    let range = [];
    if(this.searchForm.controls.fromDate.value && this.searchForm.controls.toDate.value) {
      this.noSearchData = false;
      range.push(this.searchForm.controls.fromDate.value);
      range.push(this.searchForm.controls.toDate.value);
      this.searchDateSubject.next(range);
    } else {
      this.noSearchData = true;
    }
  }
  clear() {
    this.rowData = [];
    this.searchForm.controls.fromDate.patchValue('');
    this.searchForm.controls.toDate.patchValue('');
    let range = '';
    
    this.searchDateSubject.next(range);
  }

  
}

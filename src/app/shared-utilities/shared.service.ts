import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public reqHeaders: HttpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  public fleetArchiveData = new BehaviorSubject<any>(null);
  public searchSubject: Subject<string> = new Subject();

  public selectedCustomer: Subject<any> = new Subject();

  constructor(
    public http: HttpClient
  ) { }

  getCustomerList(): Observable<any> {
    let url = '../../assets/customer.json';
    return this.http.get(url, { headers: this.reqHeaders });
  }
}

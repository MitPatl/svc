import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public fleetArchiveData = new BehaviorSubject<any>(null);

  public selectedCustomer: Subject<any> = new Subject();

  constructor() { }


}

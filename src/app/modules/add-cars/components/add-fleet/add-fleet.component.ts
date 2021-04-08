import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared-utilities/shared.service';

@Component({
  selector: 'app-add-fleet',
  templateUrl: './add-fleet.component.html',
  styleUrls: ['./add-fleet.component.scss']
})
export class AddFleetComponent implements OnInit {
  public cols: any[] = [];
  public cars: any[]=[];
  public formGroup: FormGroup = this.fb.group({});
  public archiveList: any[]=[];

  constructor(
    public fb: FormBuilder,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      carName: this.fb.control(null)
    })
    this.cols = [
      { field: 'name', header: 'Name' },
    ]
  }

  onClickAdd() {
    if(this.formGroup.controls.carName.value) {
      const data = this.formGroup.controls.carName.value;
      let list = [];
      if(data.indexOf(' ') !== -1) {
        list = this.formGroup.controls.carName.value.split(' ');
      } else {
        let dup = this.cars.filter(resp => resp.name === data);
          if(dup.length === 0 && data != '') {
            this.cars.push({
              name: data
            })
          }
      }
      
      if(list.length > 1) {
        list.forEach((obj: any) => {
          let dup = this.cars.filter(resp => resp.name === obj);
          if(dup.length === 0 && obj != '') {
            this.cars.push({
              name: obj
            })
          }
          
        });
      }
    }

    this.formGroup.controls.carName.patchValue('');
  }

  onArchive(data: any) {
    this.sharedService.fleetArchiveData.next(data);
    this.cars = this.cars.filter(resp => resp.name !== data.name);
  }
}

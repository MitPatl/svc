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
  public rowData: any[] = [];

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


  onAdd(event: any) {
    if(event) {
      this.formGroup.get('carName')?.patchValue([]);
      
        
      if(event.value.indexOf(',') !== -1) {
        const data = event.value.split(',');
        if(data && data.length) {
          for(let x=0; x<data.length; x++) {
            this.rowData.push(
              data[x]
            )
          }
        }
      } if(event.value.indexOf(' ') !== -1) {
        let data = event.value.replace(/(\s)+/g, ' ');
        data = data.split(' ');
        if(data && data.length) {
          for(let x=0; x<data.length; x++) {
            this.rowData.push(data[x])
          }
        }
      } else {
        this.rowData.push(event.value,)
      }
      

      this.formGroup.get('carName')?.patchValue(this.rowData);
    }
  }

  onClickAdd() {
    if(this.formGroup.controls.carName.value) {
      const data = this.formGroup.controls.carName.value;
      
      if(data.length) {
        data.forEach((obj: any) => {
          let dup = this.cars.filter(resp => resp.name === obj);
          if(dup.length === 0 && obj != '') {
            this.cars.push({
              name: obj
            })
          }
          
        });
      }
    }

    this.formGroup.controls.carName.patchValue([]);
    this.rowData = [];
  }

  onArchive(data: any) {
    this.sharedService.fleetArchiveData.next(data);
    this.cars = this.cars.filter(resp => resp.name !== data.name);
  }
}

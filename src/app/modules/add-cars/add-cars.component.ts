import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {
  @Input() showAddCars: boolean=false;
  @Output() closeAddCars: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }

  onClose() {
    this.closeAddCars.emit(false);
  }

}

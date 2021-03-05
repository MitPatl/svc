import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public displaySideBar: boolean = false;
  public displayDialog: boolean = false; 
  constructor() { }

  

  ngOnInit(): void {
  }

  onClose() {
    this.displaySideBar = false;
    const newLocal = false;
    this.displayDialog = newLocal;
  }

}

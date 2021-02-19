import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeBar.emit(false);
    this.continue = false;
  }

  onContinue() {
    this.continue = true;
  }

  onBack() {
    this.continue = false;
  }
    
}

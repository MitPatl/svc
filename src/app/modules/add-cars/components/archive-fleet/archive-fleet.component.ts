import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared-utilities/shared.service';

@Component({
  selector: 'app-archive-fleet',
  templateUrl: './archive-fleet.component.html',
  styleUrls: ['./archive-fleet.component.scss']
})
export class ArchiveFleetComponent implements OnInit {
  public archiveData: any[]=[];
  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.fleetArchiveData.subscribe(resp => {
      if(resp) {
        this.archiveData.push(resp);
      }
      
    });
  }

  
}

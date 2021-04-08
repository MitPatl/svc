import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveFleetComponent } from './archive-fleet.component';

describe('ArchiveFleetComponent', () => {
  let component: ArchiveFleetComponent;
  let fixture: ComponentFixture<ArchiveFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

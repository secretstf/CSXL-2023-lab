import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubUpdateDialogComponent } from './club-update-dialog.component';

describe('ClubUpdateDialogComponent', () => {
  let component: ClubUpdateDialogComponent;
  let fixture: ComponentFixture<ClubUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

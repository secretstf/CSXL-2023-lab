import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsEventsComponent } from './clubs-events.component';

describe('ClubsEventsComponent', () => {
  let component: ClubsEventsComponent;
  let fixture: ComponentFixture<ClubsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

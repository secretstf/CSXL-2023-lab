import { Component } from '@angular/core';
import { Club } from '../clubs-events.component';
import { EventsService } from '../clubs-events-services/events.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export type NewEvent = {
  event_name: string;
  club_id: number;
}

export type Event = {
  id: number;
  event_name: string;
  club_id: number;
  associated_club: Club;
}

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})

export class EventRegistrationComponent {
  public static Route = {
    path: 'clubs-events/event-registration',
    component: EventRegistrationComponent
  }

  constructor(private event_srv: EventsService, private router: Router) { }
  
  registrationForm = new FormGroup({
    id: new FormControl(),
    event_name: new FormControl(''),
    club_id: new FormControl(),
  })

  onSubmit() {
    if (this.registrationForm.value.event_name == null || this.registrationForm.value.club_id == null) {
      return;
    }
    this.event_srv.registerEvent(this.registrationForm.value.event_name, this.registrationForm.value.club_id)
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert("This club ID is not valid or does not exist. Please use a valid club ID.");
      }
    )

    this.registrationForm.reset();
    this.router.navigate(['/']);
  }
}

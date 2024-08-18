import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Event } from '../event-registration/event-registration.component';
import { Subscription } from 'rxjs';
import { EventsService } from '../clubs-events-services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  public links = [
    { label: 'Clubs', path: '/clubs-events/clubs' },
    { label: 'Events', path: '/clubs-events/events' },
  ];

  public static Route = {
    path: 'clubs-events/events',
    component: EventsListComponent
  }

  eventColumns = ['id', 'eventName', 'clubName'];
  eventsDataSource = new MatTableDataSource<Event>([]);
  subs = new Subscription();

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.subs.add(this.eventsService.getEvents().subscribe(events => {
      this.eventsDataSource.data = events;
    }));
  }

}

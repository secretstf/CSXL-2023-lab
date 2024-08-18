import { Component, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ClubsService } from './clubs-events-services/clubs.service';
import { Route } from '@angular/router';
import { Event } from './event-registration/event-registration.component';
import { EventsService } from './clubs-events-services/events.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import { MatTabsModule } from '@angular/material/tabs';

export type Club = {
  id: number;
  email: string;
  club_name: string;
  leadership: string;
  link: string;
}

@Component({
  selector: 'app-clubs-events',
  templateUrl: './clubs-events.component.html',
  styleUrls: ['./clubs-events.component.css']
})
export class ClubsEventsComponent {

  public links = [
    { label: 'Clubs', path: '/clubs-events/clubs' },
    { label: 'Events', path: '/clubs-events/events' },
  ];

  clubColumns = ['id', 'clubName', 'email', 'leadership', 'link', 'viewMore'];
  eventColumns = ['id', 'eventName', 'clubName'];
  dataSource = new MatTableDataSource<Club>([]);
  eventsDataSource = new MatTableDataSource<Event>([]);
  subs = new Subscription();

  constructor(private clubsService: ClubsService, private eventsService: EventsService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.subs.add(this.clubsService.getClubs().subscribe(clubs => {
      this.dataSource.data = clubs;
    }));

    this.subs.add(this.eventsService.getEvents().subscribe(events => {
      this.eventsDataSource.data = events;
    }));
  }

};










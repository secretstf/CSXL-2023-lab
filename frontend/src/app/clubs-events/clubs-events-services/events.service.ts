import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewEvent, Event } from '../event-registration/event-registration.component';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/event');
  }

  registerEvent(event_name: string, club_id: number): Observable<NewEvent> {
    return this.http.post<NewEvent>('/api/event', {event_name, club_id});
  }
}

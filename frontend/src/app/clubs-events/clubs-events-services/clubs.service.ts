import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Club } from '../clubs-events.component';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>('/api/club/approved');
  }

  registerClub(club_name: string, email: string, leadership: String, link: String): Observable<Club> {
    return this.http.post<Club>('/api/club', {email, club_name, leadership, link});
  }

  getClub(id: number): Observable<Club>{
    return this.http.get<Club>(`api/club/${id}`)
  }
}

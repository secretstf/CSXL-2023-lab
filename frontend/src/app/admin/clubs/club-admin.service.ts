import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Club } from '../../clubs-events/clubs-events.component'; 

@Injectable({
  providedIn: 'root'
})
export class ClubAdminService {

  constructor(private http: HttpClient) { }

  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>('/api/club');
  }

  approveClub(club: Club): Observable<Club> {
    return this.http.put<Club>('/api/club/approve', club);
  }

  updateClub(club: Club): Observable<Club> {
    console.log("HTTP Request Club", club)
    return this.http.put<Club>('/api/club', club);
  }

  deleteClub(id: number) {
    return this.http.delete<number>(`/api/club/${id}`);
  }

}

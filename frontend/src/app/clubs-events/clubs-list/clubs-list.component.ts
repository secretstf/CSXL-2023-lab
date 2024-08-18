import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Club } from '../clubs-events.component';
import { Subscription } from 'rxjs';
import { ClubsService } from '../clubs-events-services/clubs.service';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent {

  public links = [
    { label: 'Clubs', path: '/clubs-events/clubs' },
    { label: 'Events', path: '/clubs-events/events' },
  ];

  public static Route = {
    path: 'clubs-events/clubs',
    component: ClubsListComponent
  }

  clubColumns = ['id', 'clubName', 'email', 'leadership', 'link', 'viewMore'];
  clubDataSource = new MatTableDataSource<Club>([]);
  subs = new Subscription();


  constructor(private router: Router, private clubsService: ClubsService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.subs.add(this.clubsService.getClubs().subscribe(clubs => {
      this.clubDataSource.data = clubs;
    }));
  }

  openDialog(id: number): void {
    this.clubsService.getClub(id).subscribe(club => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '600px';
      dialogConfig.height = '600px';
      dialogConfig.data = club;
      const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    })
  }

}

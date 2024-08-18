import { Component, Input, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ClubAdminService } from '../club-admin.service';
import { Route } from '@angular/router';
import { Club } from '../../../clubs-events/clubs-events.component'; 
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClubUpdateDialogComponent } from './club-update-dialog/club-update-dialog.component';

@Component({
  selector: 'app-clubs-admin',
  templateUrl: './admin-clubs-list.component.html',
  styleUrls: ['./admin-clubs-list.component.css']
})
export class AdminClubsComponent {

  clubColumns = ['id', 'clubName', 'email', 'leadership', 'link', 'approval', 'update', 'delete'];
  dataSource = new MatTableDataSource<Club>([]);
  subs = new Subscription();


  public static Route = {
    path: 'clubs',
    component: AdminClubsComponent,
    title: 'Clubs Administration',
  }

  approveClub(club: Club) {
    this.subs.add(this.clubsService.approveClub(club).subscribe(updatedClub => {
      // Find the index of the club in the dataSource
      const index = this.dataSource.data.findIndex(c => c.id === updatedClub.id);
      
      // Replace the existing club with the updated club in the dataSource
      this.dataSource.data[index] = updatedClub;
  
      // Refresh the table to reflect the changes
      this.dataSource._updateChangeSubscription();
    }));
  }

  constructor(private clubsService: ClubAdminService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subs.add(this.clubsService.getClubs().subscribe(clubs => {
      this.dataSource.data = clubs;
    }));
  }

  openUpdateDialog(club: Club) {
    const dialogRef = this.dialog.open(ClubUpdateDialogComponent, {
      width: '400px',
      data: club
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Find the index of the club in the dataSource
        const index = this.dataSource.data.findIndex(c => c.id === result.id);
      
        // Replace the existing club with the updated club in the dataSource
        this.dataSource.data[index] = result;
  
        // Refresh the table to reflect the changes
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  deleteClub(club: Club) {
    this.subs.add(this.clubsService.deleteClub(club.id).subscribe(updatedClub => {
      // Find the index of the club in the dataSource
      const index = this.dataSource.data.findIndex(c => c.id === updatedClub);
      
      // Replace the existing club with the updated club in the dataSource
      this.dataSource.data.splice(index,1)
  
      // Refresh the table to reflect the changes
      this.dataSource._updateChangeSubscription();
    }));
  }
  
}

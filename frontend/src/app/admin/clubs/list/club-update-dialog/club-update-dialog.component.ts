import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Club } from '../../../../clubs-events/clubs-events.component';
import { Router } from '@angular/router';
import { ClubAdminService } from '../../club-admin.service';

@Component({
  selector: 'app-club-update-dialog',
  templateUrl: './club-update-dialog.component.html',
  styleUrls: ['./club-update-dialog.component.css']
})
export class ClubUpdateDialogComponent {

  onCancel() {
    this.dialogRef.close();
  }

  updateForm: FormGroup = new FormGroup({
    clubName: new FormControl(this.data.club_name),
    email: new FormControl(this.data.email),
    leadership: new FormControl(this.data.leadership),
    link: new FormControl(this.data.link)
  });

  constructor(
    public dialogRef: MatDialogRef<ClubUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Club,
    private router: Router, private clubsService: ClubAdminService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate() {
    if (this.updateForm.value.clubName == null || this.updateForm.value.email == null || this.updateForm.value.leadership == null || this.updateForm.value.link == null) {
      return;
    }
    let club: Club ={id: this.data.id, club_name: this.updateForm.value.clubName, email: this.updateForm.value.email, leadership: this.updateForm.value.leadership, link: this.updateForm.value.link}
    this.clubsService.updateClub(club).subscribe((data) => {
      console.log(data);
    })

    this.router.navigate(['/admin/clubs']);
    this.dialogRef.close(club);
  }
}

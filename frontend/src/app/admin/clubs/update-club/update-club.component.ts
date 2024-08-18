import { Component } from '@angular/core';
import { ClubAdminService } from '../club-admin.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Club } from '../../../clubs-events/clubs-events.component';
import { AdminClubsComponent } from '../list/admin-clubs-list.component';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent {
  public static Route = {
    path: 'clubs/update-club',
    component: UpdateClubComponent
  }

  constructor(private clubsService: ClubAdminService) { }

  updateForm = new FormGroup({
    club_name: new FormControl(''),
    email: new FormControl(''),
    leadership: new FormControl(''),
    link: new FormControl(''),
  })

  onSubmit() {
    if (this.updateForm.value.club_name == null || this.updateForm.value.email == null || this.updateForm.value.leadership == null || this.updateForm.value.link == null) {
      return;
    }
  }

}

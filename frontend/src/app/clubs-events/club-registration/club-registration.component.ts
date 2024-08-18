import { Component } from '@angular/core';
import { ClubsService } from '../clubs-events-services/clubs.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-club-registration',
  templateUrl: './club-registration.component.html',
  styleUrls: ['./club-registration.component.css']
})
export class ClubRegistrationComponent {
    public static Route = {
      path: 'clubs-events/club-registration',
      component: ClubRegistrationComponent
    }

    constructor(private club_service: ClubsService) { }
    
    registrationForm = new FormGroup({
      club_name: new FormControl(''),
      email: new FormControl(''),
      leadership: new FormControl(''),
      link: new FormControl(''),
    })

    onSubmit() {
      if (this.registrationForm.value.club_name == null || this.registrationForm.value.email == null || this.registrationForm.value.leadership == null || this.registrationForm.value.link == null) {
        return;
      }
      this.club_service.registerClub(this.registrationForm.value.club_name, this.registrationForm.value.email, this.registrationForm.value.leadership, this.registrationForm.value.link).subscribe((data) => {
        console.log(data);
      })
    }
}

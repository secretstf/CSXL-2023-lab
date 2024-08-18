import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsEventsComponent } from './clubs-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ClubsListComponent } from './clubs-list/clubs-list.component';
import { ClubRegistrationComponent } from './club-registration/club-registration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

const routes: Routes = [
  { path: '', component: ClubsEventsComponent, children: [
      EventsListComponent.Route,
      ClubsListComponent.Route,
      ClubRegistrationComponent.Route,
      EventRegistrationComponent.Route,
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsEventsRoutingModule { }

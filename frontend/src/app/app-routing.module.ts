import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTitleStrategy } from './app-title.strategy';
import { GateComponent } from './gate/gate.component';
import { HomeComponent } from './home/home.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { ClubRegistrationComponent } from './clubs-events/club-registration/club-registration.component'
import { EventRegistrationComponent } from './clubs-events/event-registration/event-registration.component';

import { UpdateClubComponent } from './admin/clubs/update-club/update-club.component';
import { EventsListComponent } from './clubs-events/events-list/events-list.component';
import { ClubsListComponent } from './clubs-events/clubs-list/clubs-list.component';


const routes: Routes = [
  HomeComponent.Route,
  ProfileEditorComponent.Route,
  GateComponent.Route,
  ClubRegistrationComponent.Route,
  EventRegistrationComponent.Route,
  EventsListComponent.Route,
  ClubsListComponent.Route,
  { path: 'admin', title: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule],
  providers: [AppTitleStrategy.Provider]
})
export class AppRoutingModule {}
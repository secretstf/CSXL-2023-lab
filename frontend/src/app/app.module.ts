import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


/* HTTP and Auth */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './navigation/http-request.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

/* UI / Material Dependencies */
import { NgForOf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

/* Application Specific */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorDialogComponent } from './navigation/error-dialog/error-dialog.component';
import { HomeComponent } from './home/home.component';
import { GateComponent } from './gate/gate.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { ClubsEventsComponent } from './clubs-events/clubs-events.component';
import { AdminClubsComponent } from './admin/clubs/list/admin-clubs-list.component';
import { MatTableModule } from '@angular/material/table';
import { ClubRegistrationComponent } from './clubs-events/club-registration/club-registration.component';
import { EventRegistrationComponent } from './clubs-events/event-registration/event-registration.component';
import { UpdateClubComponent } from './admin/clubs/update-club/update-club.component';
import { DialogComponent } from './dialog/dialog.component';
import { EventsListComponent } from './clubs-events/events-list/events-list.component';
import { ClubsListComponent } from './clubs-events/clubs-list/clubs-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ErrorDialogComponent,
    HomeComponent,
    GateComponent,
    ProfileEditorComponent,
    ClubsEventsComponent,
    AdminClubsComponent,
    ClubRegistrationComponent,
    EventRegistrationComponent,
    DialogComponent,
    EventsListComponent,
    ClubsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgForOf,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: 'clubs-events', component: ClubsEventsComponent },
      { path: 'clubs-admin', component: AdminClubsComponent },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("bearerToken")
        }
      }
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
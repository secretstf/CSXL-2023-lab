import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClubsEventsRoutingModule } from './clubs-events-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EventsListComponent } from './events-list/events-list.component';
import { ClubsListComponent } from './clubs-list/clubs-list.component';
import { ClubRegistrationComponent } from './club-registration/club-registration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { ClubsEventsComponent } from './clubs-events.component';

@NgModule({
  declarations: [
    ClubsEventsComponent,
    ClubsListComponent,
    EventsListComponent,
    ClubRegistrationComponent,
    EventRegistrationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatListModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClubsEventsModule { }

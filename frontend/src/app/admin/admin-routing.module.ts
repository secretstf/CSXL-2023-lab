import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminRoleDetailsComponent } from './roles/details/admin-role-details.component';
import { AdminRolesListComponent } from './roles/list/admin-roles-list.component';
import { AdminUsersListComponent } from './users/list/admin-users-list.component';
import { AdminClubsComponent } from './clubs/list/admin-clubs-list.component';
import { UpdateClubComponent } from './clubs/update-club/update-club.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    AdminUsersListComponent.Route,
    AdminRolesListComponent.Route,
    AdminRoleDetailsComponent.Route,
    AdminClubsComponent.Route,
    UpdateClubComponent.Route
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

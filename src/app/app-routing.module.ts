import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//actual components
import { EmployeeComponent } from './employee/employee.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { TravelerComponent } from './traveler/traveler.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'traveler', component: TravelerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

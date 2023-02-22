import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { TravelerComponent } from './traveler/traveler.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdministratorComponent,
    TravelerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

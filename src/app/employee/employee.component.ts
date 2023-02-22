import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  showMenu = true;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}

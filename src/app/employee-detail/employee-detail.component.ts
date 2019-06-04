import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  constructor(private router: Router, private empService: EmployeesService) { }


  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/main-page'])
  }
  updateEmployee(employee: Employee) {

  }
}

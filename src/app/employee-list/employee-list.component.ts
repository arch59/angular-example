import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[];
  constructor(private empService: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.empService.getAllEmployee()
      .subscribe((data: Employee[]) => {
        this.employee = data;
      });
  }
  
  deleteEmployee(employee: Employee) {
    this.empService.deleteEmployee(employee.id)
      .subscribe(data => {
        this.employee = this.employee.filter(data => data !== employee);
      })
  }
  updateEmployee(employee: Employee) {
    this.empService.updateEmployee(employee.firstName,employee)
    .subscribe((data:Employee[])=>{
this.employee=data;
    });
  
   this.router.navigate(['add-employee'])
  }
  goBack() {
    this.router.navigate(['/main-page'])
  }
  exportAsXLSX():void {
    this.empService.exportExcel(this.employee);
}

 importExcel(){
  this.empService.importExcel(this.employee);
}

}

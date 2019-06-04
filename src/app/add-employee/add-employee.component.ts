import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service'
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private empService: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8),Validators.pattern('^[A-Z]{1}[a-z]{3,}$')]],
      lastName: ['', Validators.required],
      salary: ['', [Validators.required,Validators.pattern('^[1-9]{1}[0-9]{3,}')]]
    })
  }
  onSubmit() {
    console.log('success');
    this.empService.addEmployee(this.registrationForm.value)
      .subscribe(data => (this.router.navigate(['employee-list'])))
  }
  goBack() {
    this.router.navigate(['/main-page'])
  }
}

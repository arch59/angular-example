import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
loading = false;
submitted = false;
returnUrl: string;
error = '';
  constructor(private fb: FormBuilder,private router:Router,private authservice: AuthenticationService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
username:['',Validators.required],
password:['',Validators.required]
    })
  
      // reset login status
      this.authservice.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl= this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authservice.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  
}goBack(){
  this.router.navigate(['/main-page'])
}
}
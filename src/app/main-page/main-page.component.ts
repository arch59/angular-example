import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import {Router} from '@angular/router';
import {User} from '../user';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'employee-crud';
  head = 'Please choose the option';
  currentUser: User;
  constructor(private empService: EmployeesService,      private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
   

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }


}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: '/main-page'},
  { path: 'main-page', component: MainPageComponent,canActivate:[AuthGuard] },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

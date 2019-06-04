import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  _url = "/home/getAll/"
  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get<Employee[]>(this._url);
  }
  addEmployee(employee: Employee) {
    return this.http.post(this._url, employee);
  }
  deleteEmployee(id: String) {
    return this.http.delete(this._url + id);
  }
  updateEmployee(firstName: String, employee: Employee) {
    return this.http.put(this._url + firstName, employee);
  }
  exportExcel(data: any[]) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
  }
  importExcel(data: any[]) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.sheet_to_json(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.readFile('/assets/Book1.xlsx')
    console.log('workbook');
  }


}

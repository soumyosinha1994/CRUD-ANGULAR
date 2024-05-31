import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 apiURL="https://localhost:44318/";
http=inject(HttpClient);
  constructor() { }
  getAllEmployee(){
   return this.http.get<IEmployee[]>(this.apiURL+"api/Employee/GetAllEmployee");
  }
  createEmployee(employee:IEmployee){
return this.http.post(this.apiURL+"api/Employee/AddEmployee",employee)
  }
  getEmployeeById(employeeId:number){
    return this.http.get<IEmployee>(this.apiURL+"api/Employee/GetEmployeeById?id="+employeeId);
   }
   updateEmployeeById(employeeId:number,employee:IEmployee){
    return this.http.put<IEmployee>(this.apiURL+"api/Employee/UpdateEmployee?id="+employeeId,employee);
   }
   deleteEmployee(employeeId:number){
    return this.http.delete(this.apiURL+"api/Employee/DeleteEmployee?id="+employeeId);
   }
   login(email:string,password:string){
    return this.http.post<{ token: string }>(this.apiURL + 'api/Authentication/Login', {
      email: email,
      password: password,
    });
   }
}

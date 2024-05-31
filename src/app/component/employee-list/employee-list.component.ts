import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { HttpServiceService } from '../../http-service.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
employeeList:IEmployee[]=[];
httpService=inject(HttpServiceService);
displayedColumns: string[] = ['id', 'name', 'email', 'age','phone','salary','action'];
router=inject(Router);
toaster=inject(ToastrService);
ngOnInit(){
  this.httpService.getAllEmployee().subscribe(result=>{
    this.employeeList=result;
    console.log(this.employeeList);
  }) 
}
edit(id:number){
  console.log(id);
  this.router.navigateByUrl("/employee/"+id)
}
delete(id:number){
  console.log(id);
  this.httpService.deleteEmployee(id).subscribe(()=>{
    console.log("deleted");
    this.toaster.error("Record deleted successfully");
    this.employeeList=this.employeeList.filter(x=>x.id!=id)
  });

}
}

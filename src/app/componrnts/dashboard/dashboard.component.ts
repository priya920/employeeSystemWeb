import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../Service/Employee.service';
import { ResponseStatus } from '../../models/appEnums';
import { ResponseMessage } from '../../models/responseMessage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lstEmployee: Employee[] = [];
  objEmployee: Employee = new Employee();
  searchText= '';
  selectedEmployee: any = null;
  constructor(private employeeService: EmployeeService,) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getFullName(employee: Employee): string {
    return `${employee.firstName} ${employee.lastName}`;
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee(this.objEmployee).subscribe((response: ResponseMessage) => {
      if (response.responseCode == ResponseStatus.success) {
        this.lstEmployee = response.responseObj;
      }
    })
  }
  showEmployeeDetails(employee: any): void {
    this.selectedEmployee = employee;
  }
}

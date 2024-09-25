import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/Employee.service';
import { ResponseStatus } from 'src/app/models/appEnums';
import { Employee } from 'src/app/models/employee.model';
import { MessageHelperService } from 'src/app/models/message-helper.service';
import { ResponseMessage } from 'src/app/models/responseMessage';



@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  lstEmployee: Employee[] = [];
  objEmployee: Employee = new Employee();
  formHeader = "Add mobile";
  isEditing: boolean = false;
  showForm = false;
  deleteEmployeeRecord: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private messageHelperService: MessageHelperService,
  ) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  openForms() {

    this.showForm = true;
    this.objEmployee = new Employee();

  }

  editEmployee(employee: Employee) {
    this.objEmployee = JSON.parse(JSON.stringify(employee));
    this.showForm = true;

  }

  getFullName(employee: Employee): string {
    return `${employee.firstName} ${employee.lastName}`;
  }

  employeetodelete(employee: Employee) {
    this.deleteEmployeeRecord = employee;
  }

  deleteEmployee() {

    this.employeeService.deleteEmployee(this.deleteEmployeeRecord)
      .subscribe((response: ResponseMessage) => {
        if (response.responseCode == ResponseStatus.success) {
          this.deleteEmployeeRecord = new Employee();
          this.getAllEmployee();
        }
        this.messageHelperService.showMessage(response.responseCode, response.message);
      })


  }

  getAllEmployee() {
    this.employeeService.getAllEmployee(this.objEmployee)
    .subscribe((response: ResponseMessage) => {
      if (response.responseCode == ResponseStatus.success) {
        this.lstEmployee = response.responseObj;
      }
    })
  }

  saveEmployee() {
    if (this.objEmployee.firstName == null) {
      this.messageHelperService.showMessage(ResponseStatus.fail, "Name field is required");
      return;
    }
    this.employeeService.saveEmployee(this.objEmployee)
      .subscribe((response: ResponseMessage) => {
        if (response.responseCode === ResponseStatus.success) {
          this.getAllEmployee();
          this.showForm = false;
        }
        this.messageHelperService.showMessage(response.responseCode, response.message);
      });
  }

  closeForm() {
    this.showForm = false;
  }





}

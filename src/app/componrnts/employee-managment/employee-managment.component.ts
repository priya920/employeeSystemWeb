import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../Service/Employee.service';
import { MessageHelperService } from '../../models/message-helper.service';
import { ResponseStatus } from '../../models/appEnums';
import { ResponseMessage } from '../../models/responseMessage';
import { environment } from 'src/environments/environment';
import { HttpHelper } from '../../models/httpHelper';
import { DataService } from '../../Service/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-managment',
  templateUrl: './employee-managment.component.html',
  styleUrls: ['./employee-managment.component.css']
})
export class EmployeeManagmentComponent implements OnInit {
  @ViewChild("f") f!: NgForm
  lstEmployee: Employee[] = [];
  objEmployee: Employee = new Employee();
  formHeader = "Add mobile";
  isEditing: boolean = false;
  showForm = false;
  @Input() file: any;
  @Output() fileChange: EventEmitter<{ fileName: string, size: number, byte64: string } | null> = new EventEmitter<{ fileName: string, size: number, byte64: string } | null>();
  // selectedAttachment: any;
  files: any;
  fileName:any;
  currentFile: any;
  searchText= '';
  selectedAttachment: { name: string } = { name: '' };
  deleteEmployeeRecord: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private dataService: DataService,
    private messageHelperService: MessageHelperService,
  ) {

  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getFullName(employee: Employee): string {
    return `${employee.firstName} ${employee.lastName}`;
  }


  private getFileNameFromUrl(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1);
  }
  Addemployee() {
    this.objEmployee = new Employee()
    this.selectedAttachment.name = '';
    this.reset = true;
  }


  onSelectFiles(event: Event): void {
    if (event?.target) {
      var file: any = (<HTMLInputElement>event.target).files?.item(0);
      this.currentFile = file;
      this.selectedAttachment.name = file.name;
      this.dataService.fileToByeString(this.currentFile)
        .subscribe((response: { fileName: string, size: number, byte64: string }) => {
          this.objEmployee.attachment = response;
        });
    }
  }

  
  editEmployee(employee: Employee) {
    this.objEmployee = JSON.parse(JSON.stringify(employee));
    if (this.objEmployee.imageURL) {
      this.selectedAttachment.name = this.getFileNameFromUrl(this.objEmployee.imageURL);
    } else {
      this.selectedAttachment.name = '';
    }
    this.objEmployee.birthdate = new Date();  
  }

 
  deleteFile() {
    this.reset = true;
    this.selectedAttachment.name = '';
    this.currentFile = null;
    
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

  resetFrom() {
    this.objEmployee = new Employee();
  }

  saveEmployee() {
    if (!this.objEmployee.firstName?.length && !this.objEmployee.lastName?.length) {
      this.messageHelperService.showMessage(ResponseStatus.fail, "Name field is required");
      return;

    }

    this.employeeService.saveEmployee(this.objEmployee)
      .subscribe((response: ResponseMessage) => {
        if (response.responseCode === ResponseStatus.success) {
          this.getAllEmployee();
          this.objEmployee = new Employee();
         
        }
        this.messageHelperService.showMessage(response.responseCode, response.message);
      });

  }

  closeForm() {
    this.showForm = false;
  }

  private _reset: boolean = false;
  get reset(): boolean {
    return this._reset;
  }


  set reset(value: boolean) {
    this._reset = value;
    if (value) {
      this.file = null;
      this.files = null;
      this.currentFile = null;
      this.reset = false;
      this.objEmployee.attachment = null;
      this.f.resetForm();
      this.f.reset();
    }
  }

  // deleteFile() {
  //   this.reset = true;
  //   this.fileChange.next(null);
  // }
}








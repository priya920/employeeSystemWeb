import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHelper } from '../models/httpHelper';


@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(
		private httpHelper: HttpHelper
	) { }

	getAllEmployee(obj: any): Observable<any> {
		const url = 'api/Employee/GetAllEmployee';
		return this.httpHelper.postHelper(url, obj);
	}

	saveEmployee(obj: any): Observable<any> {
		const url = 'api/Employee/SaveEmployee';
		return this.httpHelper.postHelper(url, obj);
	}

	deleteEmployee(obj: any): Observable<any> {
		const url = 'api/Employee/DeleteEmployee';
		return this.httpHelper.postHelper(url, obj);
	}

}

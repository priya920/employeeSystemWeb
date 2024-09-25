import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs/operators';
import { finalize } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: "root" })
export class HttpHelper {
	static numberOfRequest = 0;
	private timeOutTime = 1000000;
	private _baseUrl = environment.BASE_URL;
	constructor(
		private httpClient: HttpClient,

	) { }

	postHelper(url: string, obj: any = {}, currentPage: number = 0, pageSize: number = 100,): Observable<any> {
		HttpHelper.numberOfRequest++;
		let payload = {
			RequestObj: obj,
			PageRecordSize: pageSize,
			PageNumber: currentPage,
			UserId: 0
		}

		return this.httpClient.post(this._baseUrl + url, payload)
			.pipe(timeout(this.timeOutTime))
			.pipe(map((value: any) => value,
				(error: HttpErrorResponse) => {
					this.handleError(error);
				})).pipe(catchError(this.handleError.bind(this)))
			.pipe(finalize(() => {
				HttpHelper.numberOfRequest--;
			}));
	}

	getHelper(url: string): Observable<any> {
		HttpHelper.numberOfRequest++;
		return this.httpClient.get(this._baseUrl + url)
			.pipe(timeout(this.timeOutTime))
			.pipe(map((value: any) => {
				return value;
			}, (error: HttpErrorResponse) => {
				this.handleError(error);
			})).pipe(catchError(this.handleError.bind(this)))
			.pipe(finalize(() => {
				HttpHelper.numberOfRequest--;
			}));
	}

	private handleError(error: HttpErrorResponse) {
		return throwError(() => {
			new Error(error.error);
		});
	}
}

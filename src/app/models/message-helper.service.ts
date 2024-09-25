import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalConfig } from 'ngx-toastr';
import * as appEnums from '../models/appEnums'
@Injectable({
    providedIn: 'root'
})
export class MessageHelperService {

    private options: GlobalConfig | undefined;

    constructor(
        private toastr: ToastrService
    ) { }

    showMessage(code: number, message: string) {
        if (code === appEnums.ResponseStatus.success) {
            this.toastr.success(message, 'Employee System', {
                // disableTimeOut: true,
                // tapToDismiss: false,
                toastClass: "toast-icon custom-toast-success"
            });
        }
        else if (code === appEnums.ResponseStatus.warning) {
            this.toastr.warning(message, 'Employee System', {
                // disableTimeOut: true,
                // tapToDismiss: false,
                toastClass: "toast-icon custom-toast-warning"
            });
        }
        else if (code === appEnums.ResponseStatus.info) {
            this.toastr.info(message, 'Employee System', {
                // disableTimeOut: true,
                // tapToDismiss: false,
                toastClass: "toast-icon custom-toast-info"
            });
        }
        else if (code === appEnums.ResponseStatus.fail) {
            this.toastr.error(message, 'Employee System', {
                // disableTimeOut: true,
                // tapToDismiss: false,
                toastClass: "toast-icon custom-toast-error"
            });
        }
        else if (code === null) {
            this.toastr.error(message, 'Employee System', {
                // disableTimeOut: true,
                // tapToDismiss: false,
                toastClass: "toast-icon custom-toast-error"
            });
        }
    }
}

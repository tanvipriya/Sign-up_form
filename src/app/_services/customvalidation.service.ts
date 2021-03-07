import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }
validmatch(password: string, firstName: string) {
  return (formGroup: FormGroup) => {
    console.log('formGroup',formGroup.controls[firstName]);
    return formGroup;
  }
 
}
//   MatchPassword(password: string, firstName: string) {
//     return (formGroup: FormGroup) => {
//       const passwordControl = formGroup.controls[password];
//       const confirmfirstNameControl = formGroup.controls[firstName];
// console.log('confirmfirstNameControl',confirmfirstNameControl);

//       if (!passwordControl || !confirmfirstNameControl) {
//         return null;
//       }

//       if (confirmfirstNameControl.errors && !confirmfirstNameControl.errors.passwordMismatch) {
//         return null;
//       }

//       if (passwordControl.value !== confirmfirstNameControl.value) {
//         confirmfirstNameControl.setErrors({ passwordMismatch: true });
//       } else {
//         confirmfirstNameControl.setErrors(null);
//       }
//     }
//   }

  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {

    /* A static array is used to validate the availability of user names.
    *  Ideally it should be a service call to the server to search the value from a database.
    */

    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }
}
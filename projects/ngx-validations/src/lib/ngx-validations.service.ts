import { Injectable, Inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { VALIDATION_CONFIG } from "./ngx-validations.config";

@Injectable()
export class NgxValidationsService {
  constructor() {}
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: any = {
      required: "Required",
      invalidEmail: "Invalid Email",
      invalidYear: "Invalid Year",
      invalidPostal: "Invalid Postal Code",
      invalidMobile: "Invalid Mobile",
      invalidPassword:
        "Invalid password. Password must be at least 6 characters long, and contain a number.",
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Max length ${validatorValue.requiredLength}`,
      invalidToDate: "From Date Time should be less than To Date Time",
      passwordMatch: "Password and Confirm Password should match",
    };

    return config[validatorName];
  }
  emailValidator(control: any) {
    // RFC 2822 compliant regex
    // tslint:disable-next-line:max-line-length
    if (
      control.value &&
      control.value.match(
        // tslint:disable-next-line:max-line-length
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const f = group.controls[from];
      const t = group.controls[to];
      if (f.value > t.value) {
        return { invalidToDate: true };
      }
      return null;
    };
  }

  mobileValidator(control: any) {
    // RFC 2822 compliant regex
    // tslint:disable-next-line:max-line-length
    if (control.value && control.value.replace(/[^0-9]/g, "").length === 10) {
      return null;
    } else if (!control.value) {
      return null;
    } else {
      return { invalidMobile: true };
    }
  }

  amountValidator(control: any) {
    if (control.value) {
      if (Number(control.value) > 0) {
        return null;
      } else {
        return { invalidAmount: true };
      }
    } else {
      return { invalidAmount: true };
    }
  }

  yearValidator(control: any) {
    const yearValue = control.value;
    if (yearValue < 1900 || yearValue > new Date().getFullYear() + 2) {
      return { invalidYear: true };
    } else {
      return null;
    }
  }
  postalCodeValidator(control: any) {
    // RFC 2822 compliant Allowing US and Canada Valid Postal Code
    if (
      control.value &&
      (control.value.match(
        /^[ABCEGHJKLMNPRSTVXYabcegjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][0-9][ABCEGHJKLMNPRSTVWXYZabcegjklmnprstvwxyz][0-9]$/
      ) ||
        control.value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/))
    ) {
      return null;
    } else if (!control.value) {
      return null;
    } else {
      return { invalidPostal: true };
    }
  }
}

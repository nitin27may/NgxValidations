import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgxValidationsService } from "./ngx-validations.service";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "ngx-validation-message",
  template: `
    <div class="alert-danger" *ngIf="errorMessage !== null">
      {{ errorMessage }}
    </div>
  `,
  styles: [],
})
export class NgxValidationsComponent implements OnInit {
  @Input() control: FormControl;
  @Input() formGroup: FormGroup;
  constructor(private validationsService: NgxValidationsService) {}
  get errorMessage() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched
        ) {
          return this.validationsService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }
    if (this.formGroup) {
      for (const propertyName in this.formGroup.errors) {
        if (
          this.formGroup.errors.hasOwnProperty(propertyName) &&
          this.formGroup.touched
        ) {
          return this.validationsService.getValidatorErrorMessage(
            propertyName,
            this.formGroup.errors[propertyName]
          );
        }
      }
    }

    return null;
  }
  ngOnInit(): void {}
}

# NgxValidations

Forms bring life to our web applications. It’s how we capture user input and make our applications useful. 
In every scenario, developers end with writing a lot html code just to show the relative messages based on the type of input validation error. We have created a validation module which will have all these logic to validate the input and display relative message from it. 
 This library is Ivy Compatible and is tested against an Angular 8, 9 app. 

## Validation List List 

| Validators            | Validator Methods             |                 Description                     |  
| --------------------- |-------------------------------| :---------------------------------------------: |
| `required`            | `Validators.required`            | to validated and display required error         | 
| `minLength`           | `Validators.minLength(length)`            | to validated and display min length error  | 
| `maxLength`           | `Validators.maxLength(35)`            | to validated and display max length error  | 
| `emailValidator`      | `this.validationService.emailValidator`            | to validate if entered email is valid | 
| `mobileValidator`     | `this.validationService.mobileValidator`            |  to validate if entered email is valid  | 
| `postalCodeValidator` | `this.validationService.postalCodeValidator`            |  to validate if entered postal is valid (North America postal code)  | 

### Upcoming validators

| selector                |                         Description                               |  
| ------------------------| :---------------------------------------------------------------: |
| `passwordStrength`      | it will check if password strength is strong or not               | 
| `passwordMatch`         | it will ccompare password and confirm password and display error if not matched   | 
| `dateComparison`        | it will validated that to date is greater than from date  | 




## Examples/Demo

* A simple Example can be found under `src/app` directory of this repository. 

## Installation

`npm i ngx-validations`

## Usage

1) Register the `NgxValidationsModule` in your app module.
 > `import { NgxValidationsModule } from "ng-validations";`

 ```typescript
 import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxValidationsModule } from "ngx-validations";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxValidationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

 ```

 2) Use service `(NgxValidationsService)` to get additional method of validaion in your component.

```typescript
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxValidationsService } from "ngx-validations";

@Component({
  selector: "ngx-val-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  title = "Ngx Validations Library";
  constructor(
    private formBuilder: FormBuilder,
    private validationService: NgxValidationsService
  ) {}

  createForm() {
    this.userForm = this.formBuilder.group({
      FirstName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
        ],
      ],
      LastName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
        ],
      ],
      Email: ["", [Validators.required, this.validationService.emailValidator]],
      Mobile: [
        "",
        [Validators.required, this.validationService.mobileValidator],
      ],
      PostalCode: [
        "",
        [Validators.required, this.validationService.postalCodeValidator],
      ],
    });
  }

  reset() {
    this.createForm();
  }
  ngOnInit() {
    this.createForm();
  }
}

```
3) Use custom element `<ngx-validation-message>` to display all error messages for a contol.

```typescript
      <form [formGroup]="userForm">
        <div class="form-row mt-4">
          <div class="col-sm-6 pb-3">
            <label for="exampleFirst">First Name</label>
            <input type="text" class="form-control" formControlName="FirstName">
            <ngx-validation-message [control]="userForm.controls.FirstName"></ngx-validation-message>
          </div>
          <div class="col-sm-6 pb-3">
            <label for="exampleLast">Last Name</label>
            <input type="text" class="form-control" formControlName="LastName">
            <ngx-validation-message [control]="userForm.controls.LastName"></ngx-validation-message>
          </div>
          <div class="col-sm-5 pb-3">
            <label for="exampleAccount">Email </label>
            <input type="text" class="form-control" formControlName="Email">
            <ngx-validation-message [control]="userForm.controls.Email"></ngx-validation-message>
          </div>
          <div class="col-sm-3 pb-3">
            <label for="exampleCtrl">Mobile #</label>
            <input type="text" class="form-control" formControlName="Mobile">
            <ngx-validation-message [control]="userForm.controls.Mobile"></ngx-validation-message>
          </div>
          <div class="col-sm-4 pb-3">
            <label for="exampleZip">Postal Code</label>
            <input type="text" class="form-control" formControlName="PostalCode">
            <ngx-validation-message [control]="userForm.controls.PostalCode"></ngx-validation-message>
          </div>
        </div>
      </form>

```

## Credits

I want to thanks entire [Angular](https://angular.io) team for creating this awesome framework.

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

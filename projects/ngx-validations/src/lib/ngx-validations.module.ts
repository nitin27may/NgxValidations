import { NgModule, ModuleWithProviders } from "@angular/core";
import { NgxValidationsComponent } from "./ngx-validations.component";
import { CommonModule } from "@angular/common";
import { NgxValidationsService } from "./ngx-validations.service";
import { VALIDATION_CONFIG } from "./ngx-validations.config";

@NgModule({
  declarations: [NgxValidationsComponent],
  imports: [CommonModule],
  exports: [NgxValidationsComponent],
  providers: [NgxValidationsService],
})
export class NgxValidationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxValidationsModule,
      providers: [NgxValidationsService],
    };
  }
}

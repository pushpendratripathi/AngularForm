import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WacapComponent } from './wacap/wacap.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [WacapComponent, ApplicantComponent],
  imports: [
    CommonModule,ReactiveFormsModule,NgSelectModule
  ],
  exports:[WacapComponent, ApplicantComponent,ReactiveFormsModule],
})
export class FormModule { }

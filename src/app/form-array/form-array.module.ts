import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HobbiesComponent } from './components/hobbies/hobbies.component';


@NgModule({
  declarations: [
    HobbiesComponent,
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    HobbiesComponent,
  ]
})
export class FormArrayModule { }

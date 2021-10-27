import { NgModule } from '@angular/core';
import { NgxColorChooserComponent } from './ngx-color-chooser.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NgxColorChooserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxColorChooserComponent
  ]
})
export class NgxColorChooserModule { }

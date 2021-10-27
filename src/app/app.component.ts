import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private fb: FormBuilder) { }
  selectedColorCode = '';
  profileForm = this.fb.group({
    colorCode: [''],
  });

  title = 'ngx-color-chooser';

  onSubmit() {
    const formValue = this.profileForm.value;
    this.selectedColorCode = formValue.colorCode;
  }
}

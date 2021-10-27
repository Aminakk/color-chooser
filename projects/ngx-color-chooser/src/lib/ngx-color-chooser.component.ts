import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'color-chooser',
  templateUrl: './ngx-color-chooser.component.html',
  styleUrls: ['./ngx-color-chooser.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxColorChooserComponent
    }
  ]
})
export class NgxColorChooserComponent implements ControlValueAccessor {
  colorsArray = [
    {label: 'Red', value: '#E5272D'},
    {label: 'Blue', value: '#276FE5'},
    {label: 'Green', value: '#27E557'},
    {label: 'Yellow', value: '#D9E527'},
    {label: 'Orange', value: '#E59C27'},
    {label: 'Grey', value: '#646091'},
  ];

  showDropdown = false;
  selectedColor = '';

  onChange = (code: string) => {
  };

  onTouched = () => {
  };
  disabled = false;
  touched = false;


  showColorDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectChangeHandler(event: any) {
    this.markAsTouched();
    this.selectedColor = event.target.value;
    this.onChange(this.selectedColor);
    this.showDropdown = !this.showDropdown;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  writeValue(selectedColor: string): void {
    this.selectedColor = selectedColor;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}

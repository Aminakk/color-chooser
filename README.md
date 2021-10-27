# ColorChooser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Install Library

To install ngx-color-chooser:

`npm install ngx-color-chooser`

## Import Library Into Your Project

To import color chooser

    import {NgxColorChooserModule} from "ngx-color-chooser";

and in your modules declaration 

    @NgModule({
        ...
        imports: [
            ...
            NgxColorChooserModule,
            ...
        ],
        ...
    })

and in your html use

    <color-chooser></color-chooser>

To use in reactive form add formControlName

    <color-chooser formControlName="colorCode"></color-chooser>

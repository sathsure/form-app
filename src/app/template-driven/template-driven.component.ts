import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('loginform') loginform: NgForm;

  defaultSelect = '2';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.loginform);
    if (this.loginform.form.valid) {
      console.log(this.loginform.form.value);
    }
  }

  onClickDefault() {
    // console.log(this.loginform);
    this.loginform.setValue({
      username: {
        firstname: 'John',
        lastname: 'Walker',
      },
      email: 'abc@gmail.com',
      dropdown: '3',
    });
    // this.loginform.form.patchValue({
    //   dropdown: '2',
    // });
    // this.loginform.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  // @ViewChild('loginform') loginform: NgForm;
  loginform: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
      }),
      emailVal: new FormControl(null, [Validators.required, Validators.email]),
      dropdown: new FormControl('2'),
      address: new FormArray([]),
    });
  }

  onSubmit() {
    // console.log(this.loginform);

    // if (this.loginform.form.valid) {
    //   console.log(this.loginform.form.value);
    // }

    if (this.loginform.valid) {
      console.log(this.loginform.value);
    }
  }

  onAddNew() {
    const newFormControl = new FormControl(null);
    (<FormArray>this.loginform.get('address')).push(newFormControl);
  }

  onClickDefault() {
    this.loginform.setValue({
      username: {
        firstname: 'John',
        lastname: 'Walker',
      },
      emailVal: 'abc@gmail.com',
      dropdown: '3',
      address: [],
    });
    // this.loginform.patchValue({
    //   dropdown: '4',
    // });
    // this.loginform.reset();
  }
}

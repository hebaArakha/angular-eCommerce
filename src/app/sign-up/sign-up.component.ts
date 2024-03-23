import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signupForm: FormGroup;
  passRegex: string = '';
  constructor() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      pass1: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/)]),
      pass2: new FormControl('', [Validators.required]),

    })
  }
  handle() {

    console.log('username', this.signupForm);

  }
}



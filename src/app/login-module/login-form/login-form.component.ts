import { Router } from '@angular/router';
import { TextValidator } from './../classes/text-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formSignup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formSignup = this.creatSignupForm();
    console.log(this.formSignup);
  }

  submit() {
    console.log(this.formSignup);
    this.router.navigate([`/home-page`]);
    this.formSignup.reset();
  }

  creatSignupForm(): FormGroup {
    return this.formBuilder.group(
      {

        email: [null, Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          TextValidator.patternValidator(/(?=@pseu.edu$)/, { fromUntisEmail: true })
        ])
        ],

        password: [null, Validators.compose([
          Validators.required,
          Validators.maxLength(80),
          Validators.minLength(6),
          TextValidator.patternValidator(/[0-9]/, { hasNumber: true }),
          TextValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          TextValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
          TextValidator.patternValidator(/[!@$%^&*(+)_-{=};':|",.<>?]/, { hasSpecialCharchters: true })
        ]),
        ],

        confirmPassword: [null, Validators.compose([Validators.required])]

      });

  }

  get email() {
    return this.formSignup.get(`email`);
  }

  get password() {
    return this.formSignup.get(`password`);
  }

}

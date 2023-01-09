import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({})
  @Output() logingAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilde: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilde.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  loginUser(){
    if(this.loginForm.valid){
      console.log('envío datos')
      this.logingAction.emit(this.loginForm.value)
      this.loginForm.reset()
    }

  }


}

import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  loginToken: string | null = ''

  @Output()  onLogin: EventEmitter<boolean> = new EventEmitter<boolean>()


  constructor(private authService: AuthService) { }

  getToken(): string | null  {
    if(sessionStorage.getItem('token')){
      this.loginToken = sessionStorage.getItem('token')!
    }
    return this.loginToken
  }

  setToken(token:any) {
      if(token){
        this.loginToken = token;
        sessionStorage.setItem('token', this.loginToken!)
        this.onLogin.emit(true)
      }
    }

  deleteToken() {
    sessionStorage.removeItem('token')
    this.loginToken = null
  }
}




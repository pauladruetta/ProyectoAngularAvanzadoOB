import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
    //let token = sessionStorage.getItem('token');

    let token = this.tokenService.getToken()
    if(token){
      this.router.navigate(['home'])
    }
  }

  loginUser(form: any){
    this.authService.login(form.email, form.password).subscribe(

      (response) => {
        console.info(response)
        this.tokenService.setToken(response.token)
        this.router.navigate(['dashboard'])
      },
      (error) => {
        console.error(`Ha ocurrido un error al hacer login ${error}`)
      },
      () => {
        console.info('Petición de login terminada')
      })
    // this.authService.login(form.email, form.password).subscribe(
    //   (response) => {
    //     if(response.token){
    //       sessionStorage.setItem('token', response.token),
    //       this.router.navigate(['home'])
    //     }
    //   },
    //   (error) => {
    //     console.error(`Ha ocurrido un error al hacer login ${error}`)
    //   },
    //   () => {
    //     console.info('Petición de login terminada')
    //   }

    //)


  }


  // logOut(){
  //   sessionStorage.removeItem('token')
  // }
}

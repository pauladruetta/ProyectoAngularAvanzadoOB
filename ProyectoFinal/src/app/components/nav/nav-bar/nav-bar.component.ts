import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  token: string | null = null;
  isToken: boolean = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
    this.tokenService.onLogin.subscribe(() =>{
      this.token = sessionStorage.getItem('token')
      this.isToken = true;
      console.log(`login: ${this.token}`)
    })
  }

  logout(){
    // sessionStorage.removeItem('token')
    this.token = null;
    console.log('logout')
    // this.router.navigate(['login'])
    this.tokenService.deleteToken()

    this.router.navigate(['login'])
  }

}

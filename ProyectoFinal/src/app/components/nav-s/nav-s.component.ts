import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-s',
  templateUrl: './nav-s.component.html',
  styleUrls: ['./nav-s.component.scss']
})

export class NavSComponent {
  token: string | null = null;
  isToken: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,
     private tokenService: TokenService, private router: Router) {}


  logout(){
    // sessionStorage.removeItem('token')
    this.token = null;
    console.log('logout')
    // this.router.navigate(['login'])
    this.tokenService.deleteToken()

    this.router.navigate(['login'])
  }

}

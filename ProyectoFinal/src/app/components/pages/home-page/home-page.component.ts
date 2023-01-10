import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router'
import { IRandomContact } from 'src/app/models/interfaces/ramdomuser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null =null;
  contactoSeleccionado: IRandomContact | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.token = sessionStorage.getItem('token')

    if(history.state.data){
      console.log(history.state.data)
      this.contactoSeleccionado = history.state.data
    }

  }

  navegarAContacts():void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }
    this.router.navigate(['dashboard/contactos'],navigationExtras);
  }

}

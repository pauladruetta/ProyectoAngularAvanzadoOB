import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { IRandomContact, Results } from 'src/app/models/interfaces/ramdomuser';
import { ContactoService } from 'src/app/services/contacto.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  filtroSexo: string = 'todos';
  cargando: boolean = true;
  listaRandomContacts: IRandomContact[] = [];

  constructor(private router: Router, private route: ActivatedRoute,
    private randomUserService: RandomUserService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (params : any )=> {
      if(params.sexo){
        console.log(params.sexo);
        this.filtroSexo = params.sexo

          if(params.sexo === 'female' || params.sexo === 'male'){
          // Implementación para obtener la lista de contactos aleatoria
            this.randomUserService.obtenerRandomContacts(10, params.sexo).subscribe(
            {
              next: (response: Results) => {

                response.results.forEach((randomContact: IRandomContact, index: number ) => {
                  this.listaRandomContacts.push(randomContact);
                })
                console.log(this.listaRandomContacts);
              },
              error: (error) => console.error(`${error}`),
              complete: () => {
                console.info('Petición de random contacts terminada ');
                this.cargando = false;
              }
            }
          );
        }else{
          // Implementación para obtener la lista de contactos aleatoria
          this.randomUserService.obtenerRandomContacts(10).subscribe(
            {
              next: (response: Results) => {

                response.results.forEach((randomContact: IRandomContact, index: number ) => {
                  this.listaRandomContacts.push(randomContact);
                })
                console.log(this.listaRandomContacts);
              },
              error: (error) => console.error(`${error}`),
              complete: () => {
                console.info('Petición de random contacts terminada ')
                this.cargando = false;
              }
            }
          );
        }
      }

    });

  }

  volverAHome(contacto: IRandomContact){

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }

    this.router.navigate(['/'], navigationExtras)
  }
}

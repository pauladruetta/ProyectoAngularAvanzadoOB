import { Injectable } from '@angular/core';

import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/interfaces/Contacto.interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  listaContactos: IContacto[] = CONTACTOS;

  constructor() { }

  // obtenerContactos(): Promise<IContacto[]>{
  //   return Promise.resolve(CONTACTOS)
  // }

  obtenerContactos(sexo?:string): Promise<IContacto[]>{
    if(sexo == 'male' || sexo == 'female'){
      let listaFiltrada = this.listaContactos.filter((contacto)=> contacto.sexo == sexo);
      return Promise.resolve(listaFiltrada)
    } else if(sexo == 'todos') {
      return Promise.resolve(this.listaContactos)
    } else {
      return Promise.reject('Filtro no válido');
    }

  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined{
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id)

    //Observable
    let observable = new Observable<IContacto>(observer => {
      observer.next(contacto);
      observer.complete();
    })

    if (contacto) {
      return observable;
    } else {
      return
    }
  }
}

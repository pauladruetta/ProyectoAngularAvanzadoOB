import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { IRandomContact } from 'src/app/models/interfaces/ramdomuser';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  @Input() listaContactos: IRandomContact[] =[];
  contactoSeleccionado: IRandomContact | undefined;
  @Input()filtro: string ='';

  @Output() enviar: EventEmitter<IRandomContact> = new EventEmitter<IRandomContact>();

  subscription: Subscription | undefined

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    // this.contactoService.obtenerContactos()
    // .then((lista: IContacto[])=> this.listaContactos = lista)
    // .catch((error) => console.error('Hubo un error'))
    // .finally(() => console.error('Terminado'))
    // console.table(this.listaContactos)
    console.log(this.listaContactos)
  }

  // obtenerContacto(id:number){
  //   this.subscription = this.contactoService.obtenerContactoPorID(id)?.subscribe(() =>
  //   (contacto: IContacto)=> this.contactoSeleccionado = contacto)
  // }

  volverAHome(contacto:IRandomContact){
    console.log('Envío contacto a home')
    this.enviar.emit(contacto);
  }

   ngOnDestroy(): void {
  //   this.subscription?.unsubscribe();
   }
}

import { Pipe, PipeTransform } from '@angular/core';
import { IRandomContact } from '../models/interfaces/ramdomuser';

@Pipe({
  name: 'nombreCompelto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IRandomContact, ...args: unknown[]): unknown {
    return `${contacto.name.title} ${contacto.name.first} ${contacto.name.first}`;
  }

}

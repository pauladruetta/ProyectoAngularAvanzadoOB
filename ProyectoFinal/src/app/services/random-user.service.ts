import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IContacto } from '../models/interfaces/Contacto.interface';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Results } from '../models/interfaces/ramdomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`Ha ocurrido un error: ${error.error}`)
    }else{
      console.error(`Error en el backend: ${error.status}. El error es: ${error.error}`)
    }
    return throwError(() => new Error('Error en la petición de contacto aleatorio')
    );
  }

  obtenerRandomContact(): Observable<any>{
    return this.http.get('https://randomuser.me/api').pipe(
    retry(2), // Nº de reintentos de peticiones
    catchError(this.handleError) // sacamos error si algo falla
  );
  }

  obtenerRandomContacts(n: number, sexo?:string): Observable<Results>{

    let params: HttpParams = new HttpParams().set("results", n);

    if(sexo){
      console.log('Filtrado por MUJER / HOMBRE');
      params = params.append("gender", sexo);
    }

    return this.http.get<Results>('https://randomuser.me/api', {params: params} ).pipe(
      retry(2), // Nº de reintentos de peticiones
      catchError(this.handleError) // sacamos error si algo falla
    );

  }



}

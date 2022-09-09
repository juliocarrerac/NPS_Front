import { Injectable } from '@angular/core';
import { ResponseI } from '../../app/modelos/response.interface';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CalificacionI } from '../modelos/calificacion.interface';


@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  url: string = 'https://localhost:7164/';
  constructor(private http:HttpClient) { }

  calificacion(form:CalificacionI):Observable<ResponseI>{
    let tok: any = localStorage.getItem("token")?.toString();
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + tok);
    let direccion = this.url + 'api/Calificacion/ActualizarCalificacionPorUsuario'
    return this.http.post<ResponseI>(direccion, form, { headers: header });



  }
}

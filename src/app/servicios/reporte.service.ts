import { Injectable } from '@angular/core';
import { ResponseI } from '../../app/modelos/response.interface';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CalificacionI } from '../modelos/calificacion.interface';
import { ReporteI } from '../modelos/reporte.interface';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  url: string = 'https://localhost:7164/';
  constructor(private http:HttpClient) { }

  listarReporte():Observable<ReporteI[]>{
    let direccion = this.url + 'api/Calificacion/ListarCalificaciones';
    let tok: any = localStorage.getItem("token")?.toString();
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + tok);
    return this.http.get<ReporteI[]>(direccion, { headers: header });
  }
}

import { Injectable } from '@angular/core';
import { LoginI } from '../../app/modelos/login.interface';
import { ResponseI } from '../../app/modelos/response.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'https://localhost:7164/';
  constructor(private http:HttpClient) { }

  login(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + 'api/Usuario/ValidarUsuario'
    return this.http.post<ResponseI>(direccion, form);
  }
}

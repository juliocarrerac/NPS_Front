import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app/servicios/login.service';
import { LoginI } from '../app/modelos/login.interface';
import { ResponseI } from '../app/modelos/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularNPS';
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:LoginService, private router:Router) {}
  login: string = '';
  password: string = '';
  puntaje: number = 0;

  ngOnInit(): void {
    
  }

  calcularPuntaje(){
    console.log(this.puntaje);
  }

  onLogin(){
    let objUsuario: LoginI;
    objUsuario = {
      Login: this.login,
      Password: this.password,
      Usuario_Id: 1,
      Nombres: 'string',
      Apellidos: 'string',
      Token: 'string'
    };


     this.api.login(objUsuario).subscribe(data =>{
      let dataResponse: ResponseI = data;
      //console.log(dataResponse.isSuccess);
      if(dataResponse.isSuccess)
      {
        console.log(dataResponse.isSuccess);
        localStorage.setItem("token",dataResponse.token);
        window.location.href = 'http://localhost:4200/reporte';
        //this.router.navigate(['reporte']);
      }    


     })
  }
}

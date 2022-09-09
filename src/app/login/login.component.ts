import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../app/servicios/login.service';
import { LoginI } from '../../app/modelos/login.interface';
import { ResponseI } from '../../app/modelos/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '.././app-routing.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'angularNPS';
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:LoginService, private router:Router) {}
  login: string = '';
  password: string = '';
  hayError: boolean = false;
  msjError: string = '';

  ngOnInit(): void {
    
  }
  onLogin(){
    if(this.login == "")
    {
      this.hayError = true;
      this.msjError = "Ingrese el usuario";
      return;
    }
    if(this.password == "")
    {
      this.hayError = true;
      this.msjError = "Ingrese la contraseña";
      return;
    }

    let objUsuario: LoginI;
    objUsuario = {
      Login: this.login,
      Password: this.password,
      Usuario_Id: 1,
      Nombres: 'string',
      Apellidos: 'string',
      Token: 'string'
    };
    this.hayError = false;

     this.api.login(objUsuario).subscribe(data =>{
      let dataResponse: ResponseI = data;

      //console.log(dataResponse.isSuccess);
      if(dataResponse.isSuccess)
      {
        localStorage.setItem("token",dataResponse.token);
        if(dataResponse.perfil_Id == 1)
        {
          this.router.navigate(['reporte']);
        }
        else{
          if(dataResponse.valor_Calificacion == null)
          {
            
            localStorage.setItem("usuarioid",dataResponse.usuario_Id.toString());
            //window.location.href = 'http://localhost:4200/reporte';
            this.router.navigate(['registrarscore']);
            return;    
          }
          if(dataResponse.valor_Calificacion >= 0)
          {
            this.hayError = true;
            this.msjError = "Usted ya registro su calificación.";
            return;
          }
        }         
      }    


     }, ( err ) => {
      this.msjError = "Error al validar usuario";
      this.hayError = true;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionI } from '../modelos/calificacion.interface';
import { LoginService } from '../servicios/login.service';
import { CalificacionService } from '../servicios/calificacion.service';
import { ResponseI } from '../modelos/response.interface';

@Component({
  selector: 'app-registrarscore',
  templateUrl: './registrarscore.component.html',
  styleUrls: ['./registrarscore.component.css']
})
export class RegistrarscoreComponent implements OnInit {

  constructor(private api:CalificacionService, private router:Router) { }
  puntaje: number = 0;
  hayError: boolean = false;
  msjError: string = '';

  ngOnInit(): void {
  }

  calcularPuntaje(){
    console.log(this.puntaje);
  }
  
  registrarCalificacion(){
    
    let objCalificacion: CalificacionI;
    objCalificacion = {
      Valor_Calificacion: this.puntaje,
      Usuario_Id: Number(localStorage.getItem("usuarioid")),
      Clasificacion: '',
      Calificacion_Id:0
    };
    this.hayError = false;

    this.api.calificacion(objCalificacion).subscribe(data =>{
      let dataResponse: ResponseI = data;
  
      //console.log(dataResponse.isSuccess);
      if(dataResponse.isSuccess)
      {
        this.msjError = "Calificación registrada.";
            this.hayError = true;
            localStorage.removeItem("token");
            setTimeout(
          () => {
            this.router.navigate(['login']);
            

          },
          2000 // the time to sleep to delay for
      );
      
      }    
  
  
     }, ( err ) => {
      this.msjError = "Error al validar usuario";
      this.hayError = true;
    })

  }



}

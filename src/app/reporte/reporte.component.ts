import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionI } from '../modelos/calificacion.interface';
import { ReporteI } from '../modelos/reporte.interface';
import { ReporteService } from '../servicios/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  displayedColumns: string[] = ["Usuario", "Clasificacion", "Valor_Calificacion", "Estado"];
  constructor(private reporteService: ReporteService, private router:Router) { }
  calificaciones: ReporteI[] = [];

  NPS: number = 0;
  CantidadPromotores: number = 0;
  CantidadDetractores: number = 0;
  CantidadEncuestados: number = 0;


  ngOnInit(): void {
    this.listarCalificaciones();
  }

  listarCalificaciones() {  
    
    this.reporteService.listarReporte(  )
    .subscribe( cali => {
      this.calificaciones = cali;
      this.NPS = this.calificaciones[0].nps;
      this.CantidadPromotores = this.calificaciones[0].cantidadPromotores;
      this.CantidadDetractores = this.calificaciones[0].cantidadDetractores;
      this.CantidadEncuestados = this.calificaciones[0].cantidadEncuestados;
    }, ( err ) => {
      this.calificaciones = [];
    });
  }

  salir()
  {
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }
}

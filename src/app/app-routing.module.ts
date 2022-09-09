import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReporteComponent } from '../app/reporte/reporte.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarscoreComponent } from './registrarscore/registrarscore.component';



const routes: Routes = [
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'reporte', component: ReporteComponent, pathMatch: 'full'
    },
    {
        path: 'registrarscore', component: RegistrarscoreComponent, pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
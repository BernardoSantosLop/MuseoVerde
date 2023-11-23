import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './main/components/inicio/inicio.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { MainComponent } from './main/components/main.component';
import { VisitasComponent } from './main/components/visitas/visitas.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'tour', component: VirtualTourComponent },
  { path: 'visita', component: VisitasComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

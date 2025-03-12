import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { SkinDetailsComponent } from './skin-details/skin-details.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'skin/:id', component: SkinDetailsComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCardsComponent } from './pages/lista-cards/lista-cards.component';
import { DiretivasDeAtributoComponent } from './pages/diretivas-de-atributo/diretivas-de-atributo.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'lista-cards',
    pathMatch: 'full'
  },
  {
    path: 'lista-cards',
    component: ListaCardsComponent,
    title: 'Lista de cards'
  },
  {
    path: 'diretivas-atributo',
    component: DiretivasDeAtributoComponent,
    title: 'Diretivas de atributos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

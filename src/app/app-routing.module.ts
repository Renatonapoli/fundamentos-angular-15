import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCardsComponent } from './pages/lista-cards/lista-cards.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCardsComponent,
    title: 'Lista de cards'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

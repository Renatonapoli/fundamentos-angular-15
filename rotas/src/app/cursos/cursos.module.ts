import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRoutingModule } from './cursos.routing.module';



@NgModule({
  declarations: [
    CursoNaoEncontradoComponent,
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }

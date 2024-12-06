import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CursoNaoEncontradoComponent,
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CursosModule { }

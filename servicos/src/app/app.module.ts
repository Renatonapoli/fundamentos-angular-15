//import { CursoService } from './../../../primeiro-projeto/src/app/cursos/curso.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { AdicionarCursoModule } from './adicionar-curso/adicionar-curso.module';
import { CommonModule } from '@angular/common';
import { CursosModule } from './cursos/cursos.module';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AdicionarCursoModule,
  ],
  // TODO Serviço sendo utilizado globalmente para toda a aplicaçao
  // providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

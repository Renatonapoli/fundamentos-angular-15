//import { CursoService } from './../../../primeiro-projeto/src/app/cursos/curso.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { AdicionarCursoComponent } from './adicionar-curso/adicionar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AdicionarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // TODO Serviço sendo utilizado globalmente para toda a aplicaçao
  // providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

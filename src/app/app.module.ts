import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { PrimeiroProjetoComponent } from './pages/primeiroProjeto/primeiro-projeto.component';
import { ProjetoCriadoNoCliComponent } from './pages/projeto-criado-no-cli/projeto-criado-no-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroProjetoComponent,
    ProjetoCriadoNoCliComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

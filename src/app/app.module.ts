import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrimeiroProjeto } from './pages/primeiroProjeto/primeiro-projeto.component';
import { ProjetoCriadoNoCliComponent } from './pages/projeto-criado-no-cli/projeto-criado-no-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroProjeto,
    ProjetoCriadoNoCliComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

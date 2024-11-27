import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCardsComponent } from './pages/lista-cards/lista-cards.component';
import { CardComponent } from './components/card/card.component';
import { DiretivasDeAtributoComponent } from './pages/diretivas-de-atributo/diretivas-de-atributo.component';
import { HighlightDirective } from './pages/diretivas-de-atributo/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaCardsComponent,
    CardComponent,
    DiretivasDeAtributoComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

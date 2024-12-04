import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    BrowserModule,
    NgModule
  ],
  exports:[CursosComponent],
  // TODO Usando o provide no module será feito uma única chamada e o comportamente será será igual para os demais que o utilizarem.
  //providers: [CursosService],
})
export class AppModule { }

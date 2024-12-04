import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdicionarCursoComponent } from './adicionar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';
//import { CursosService } from '../cursos/cursos.service';


@NgModule({
  declarations: [
    AdicionarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    NgModule,
    BrowserModule,
  ],
  exports:[AdicionarCursoComponent],
  // TODO Usando o provide no module será feito uma única chamada e o comportamente será será igual para os demais que o utilizarem.
  //providers: [CursosService],
})
export class AppModule { }

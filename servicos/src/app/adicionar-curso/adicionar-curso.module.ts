import { NgModule } from '@angular/core';
import { AdicionarCursoComponent } from './adicionar-curso.component';
import { CommonModule } from '@angular/common';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';
//import { CursosService } from '../cursos/cursos.service';


@NgModule({
  declarations: [
    AdicionarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AdicionarCursoComponent],
  // TODO Usando o provide no module será feito uma única chamada e o comportamente será será igual para os demais que o utilizarem.
  //providers: [CursosService],
})
export class AdicionarCursoModule { }

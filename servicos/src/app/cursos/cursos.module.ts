import { NgModule } from '@angular/core';
//import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CursosComponent],
  // TODO Usando o provide no module será feito uma única chamada e o comportamente será será igual para os demais que o utilizarem.
  //providers: [CursosService],
})
export class CursosModule { }

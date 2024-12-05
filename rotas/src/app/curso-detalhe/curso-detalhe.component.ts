import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent {
  id: string = ''

  constructor(private idRouter: ActivatedRoute) {
   this.id = this.idRouter.snapshot.params['id']
  }
}

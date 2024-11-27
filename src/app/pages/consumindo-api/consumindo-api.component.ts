import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.listarPokemons()
  }

  listarPokemons(){
    return this.service.pokemons()
  }
}

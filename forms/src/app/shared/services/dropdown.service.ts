import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstado() {
    return this.http.get<EstadosBr[]>('assets/dados/estadosbr.json')
  }

  getCargos() {
    return [
      {nome: 'Dev', nivel: 'Júnior', desc: 'Dev JR'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev PL'},
      {nome: 'Dev', nivel: 'Sênior', desc: 'Dev SR'}
    ]
  }

  getTecnologias() {
    return [
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'Javascript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'},
    ]
  }
}

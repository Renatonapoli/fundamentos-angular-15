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
}

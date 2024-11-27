import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL: string = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  pokemons() {
    return this.http.get(this.URL).subscribe()

  }

}

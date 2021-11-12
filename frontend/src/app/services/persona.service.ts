import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:4000/api/eventos/personas/'

  constructor(private http: HttpClient) { }

  getPersona(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

}

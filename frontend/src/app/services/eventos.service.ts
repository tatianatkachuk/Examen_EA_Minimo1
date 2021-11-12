import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  url = 'http://localhost:4000/api/eventos/'

  constructor(private http: HttpClient) { }

  getEventos():Observable<any>{
    return this.http.get(this.url)
  }

  getEvento(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  createEvento(evento:Evento):Observable<any>{
    return this.http.post(this.url, evento)
  }

  updateEvento(id:string, evento: Evento):Observable<any>{
    return this.http.put(this.url+id, evento)
  }

  deleteEvento(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}

export class Evento{
  _id?: string;
  nombre: string;
  fecha: string;
  descripcion: string;
  lat: number;
  lng: number;
  id_evento: string;
  id_persona: string;


  constructor(nombre:string, fecha:string,
    descripcion:string, lat:number, lng:number, id_evento:string, id_persona:string){
    this.nombre = nombre;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.lat = lat;
    this.lng = lng;
    this.id_evento = id_evento;
    this.id_persona = id_persona;
  }
}

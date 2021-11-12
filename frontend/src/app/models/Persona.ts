export class Persona{
  _id?: string;
  nombre: string;
  apellido: string;
  id_evento: string;
  id_persona: string;

  constructor(
    nombre:string, apellido:string, id_evento: string, id_persona: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.id_evento = id_evento;
    this.id_persona = id_persona;
  }
}

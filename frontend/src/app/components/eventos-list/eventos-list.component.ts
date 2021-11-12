import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/Evento';
import { Persona } from 'src/app/models/Persona';
import { EventosService } from 'src/app/services/eventos.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {
  listEventos: Evento[] = []

  title= '';
  personaData: Persona;

  constructor(
    private eventoService: EventosService,
    private toastr: ToastrService,
    private personaService: PersonaService) {
      this.personaData = {
        nombre : '',
        apellido: '',
        id_evento: '',
        id_persona: '',
     }
     }

  ngOnInit(): void {
    this.getEventos()
  }

  getEventos(){
    this.eventoService.getEventos().subscribe(data => {
      console.log(data)
      this.listEventos = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteEvento(id:any){
    this.eventoService.deleteEvento(id).subscribe(data => {
      this.toastr.info(`El evento se eliminó de forma satisfactoria!`, 'OK!')
      this.getEventos()
    }, error =>{
      this.toastr.error(`El evento no se ha podido eliminar!`, 'ERROR')
    })
  }

  getPersona(id_persona:string){

    if(id_persona !== null){

      this.personaService.getPersona(id_persona).subscribe(
        (        data: {
          nombre: any;
          apellido: any;
          id_evento: any;
          id_persona: any;
        }) => {
          this.personaData={
            nombre: data.nombre,
            apellido: data.apellido,
            id_evento: data.id_evento,
            id_persona: data.id_persona}

          const od: Persona={
            nombre: this.personaData.nombre,
            apellido: this.personaData.apellido,
            id_evento: this.personaData.id_evento,
            id_persona: this.personaData.id_persona
            }

        this.title = od.id_persona
        console.log(this.title);

      })
    }
  }

}

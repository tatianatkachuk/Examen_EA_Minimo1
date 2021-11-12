import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-info',
  templateUrl: './persona-info.component.html',
  styleUrls: ['./persona-info.component.css']
})
export class PersonaInfoComponent implements OnInit {


  title= '';
  personaData: Persona;

  constructor(private personaService: PersonaService) {
    this.personaData = {
      nombre : '',
      apellido: '',
      id_evento: '',
      id_persona: '',
   }
  }
  ngOnInit(): void {
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

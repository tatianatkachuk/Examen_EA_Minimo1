import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/models/Evento';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  eventoForm: FormGroup;
  titleForm= 'Crea un nuevo evento';
  id: string | null;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    private eventoService: EventosService,
    private aRouter: ActivatedRoute
  ) {
    this.eventoForm = this.fb.group({
      nombre: [
        '',
        Validators.required
      ],
      fecha: [
        '',
        Validators.required
      ],
      descripcion: [
        '',
        Validators.required
      ],
      lat: [
        '',
        Validators.required
      ],
      lng: [
        '',
        Validators.required
      ],
      id_evento: [
        '',
        Validators.required
      ],
      id_persona: [
        '',
        Validators.required
      ]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.updateEvento();
  }

  createEvento(){
    //recoger los datos introducidos en el formulario
    const evento: Evento={
      nombre: this.eventoForm.get('nombre')?.value,
      fecha: this.eventoForm.get('fecha')?.value,
      descripcion: this.eventoForm.get('descripcion')?.value,
      lat: this.eventoForm.get('lat')?.value,
      lng: this.eventoForm.get('lng')?.value,
      id_evento:this.eventoForm.get('id_evento')?.value,
      id_persona:this.eventoForm.get('id_persona')?.value,
    }

    if(this.id !== null){
      //update evento
      this.eventoService.updateEvento(this.id,evento).subscribe(data =>{
        this.toastr.success(`The evento ${evento.nombre} was successfully updated!`, 'OK!');
        this.router.navigate(['/eventos'])
      }, error => {
        this.toastr.error(`The evento cannot be updated!`, 'ERROR');
        this.eventoForm.reset();
      })}
      else{
      //create evento
      this.eventoService.createEvento(evento).subscribe(
        data => {
          this.toastr.success(`The evento ${evento.nombre} was successfully created!`, 'OK!');
          this.router.navigate(['/eventos'])
        }, error => {
          this.toastr.error(`The evento cannot be created!`, 'ERROR');
          this.eventoForm.reset();
        }
      )
    }

  }

  updateEvento(){
    if(this.id !== null){
      this.titleForm = 'Edit the selected Evento'
      this.eventoService.getEvento(this.id).subscribe(
        data => {
          this.eventoForm.setValue({
            nombre: data.nombre,
            fecha: data.fecha,
            descripcion: data.descripcion,
            lat: data.lat,
            lng: data.lng,
            id_evento: data.id_evento,
            id_persona: data.id_persona,
          })
        }
      )
    }
  }

}

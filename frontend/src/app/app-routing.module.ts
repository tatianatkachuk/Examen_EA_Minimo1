import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoFormComponent } from './components/evento-form/evento-form.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { PersonaInfoComponent } from './components/persona-info/persona-info.component';

const routes: Routes = [
  //eventos
  {
    path:'eventos',
    component: EventosListComponent
  },
  {
    path:'eventos/new',
    component: EventoFormComponent
  },
  {
    path:'eventos/edit/:id',
    component: EventoFormComponent
  },
  {
    path:'personas/info/:id',
    component: PersonaInfoComponent
  },

   //general
   {
    path:'**',
    redirectTo:'/eventos',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

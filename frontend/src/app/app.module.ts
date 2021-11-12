import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EventoFormComponent } from './components/evento-form/evento-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaInfoComponent } from './components/persona-info/persona-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosListComponent,
    EventoFormComponent,
    PersonaInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

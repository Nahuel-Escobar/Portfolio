import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentacionModule } from './presentacion/presentacion.module';
import { MaterialModule } from './material/material.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { FormularioModule } from './formulario/formulario.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    PresentacionModule,
    MaterialModule,
    ProyectosModule,
    FormularioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

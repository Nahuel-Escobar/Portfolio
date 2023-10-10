import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProyectosComponent
  ]
})
export class ProyectosModule { }

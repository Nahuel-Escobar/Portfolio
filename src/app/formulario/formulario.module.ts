import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    ContactComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }

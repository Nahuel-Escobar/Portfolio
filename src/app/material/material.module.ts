import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Usaremos este modulo para importar todos los componentes de Angular material
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ],
})
export class MaterialModule { }

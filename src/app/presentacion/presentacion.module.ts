import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    PresentacionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PresentacionComponent
  ]
})
export class PresentacionModule { }

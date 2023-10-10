import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  images: string[] = [
    '../../../assets/img/Csharp.png',
    '../../../assets/img/net.png',
    '../../../assets/img/EfCore.png',
    '../../../assets/img/MSSQL.png',
    '../../../assets/img/Vs.png',
    '../../../assets/img/Angular.png',
    '../../../assets/img/Git.png',
    '../../../assets/img/JavaScript.png',
    '../../../assets/img/Html.png',
    '../../../assets/img/Css.png',
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1000); // Cambia de imagen cada 3 segundos (3000 ms)
  }

}

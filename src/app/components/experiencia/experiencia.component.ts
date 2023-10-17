import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  textDeloitte = `Un año de experiencia de becario en el cual ejercí como programador en la aclamada consultora Deloitte.
  Durante este tiempo forme parte de un equipo de desarrollo el cual se encargaba del desarrollo y manteniemiento de una serie de servicios y
  aplicaciones web las cuales usaban como back-end Java 6 y como front-end HTML5, CSS3 y JavaScript.`;

  textEveris = `Entrada en la firma en febrero de 2021 como un programador junior en la aclamada consultora Everis S.L.U.
  Hasta día de hoy formo parte de un equipo de desarrollo el cual se encarga del desarrollo y mantenimiento de una serie de de servicios y
  aplicacones web desarrolladas con tecnologías tales como Java, Spring o JavaScript`;

  textIrium = `Entrada en la firma en febrero de 2023 como un programador junior en la aclamada consultora Irium Soluciones y Sistemas.
  Hasta día de hoy formo parte de un equipo de desarrollo el cual se encarga del desarrollo y mantenimiento de una serie de de servicios y 
  aplicacones web desarrolladas con tecnologías como Java, Spring, JavaScript, JSF y Oracle SQL`;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  textDeloitte = `Un año de experiencia de becario en el cual ejerci como programador en la aclamada consultora Deloitte. 
  Durante este tiempo forme parte de un equipo de desarrollo el cual se encargaba del desarrollo y manteniemiento de una serie de servicios y 
  aplicaciones web los cuales usaban como back-end Java 6 y como front-end HTML5, CSS3 y JavaScript.`;
  constructor() { }

  ngOnInit(): void {
  }

}

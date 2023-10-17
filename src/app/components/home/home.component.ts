import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  texto1:string = '';
  texto2:string = '';
  texto3:string = '';
  ngOnInit(): void {
    this.texto1 = `Nacido en Huelva en 1999, mostró desde temprana edad un gran gusto e interes por la informática y la
    tecnología. Este interes le acercaría poco a poco al desarrollo de software hasta que finalmente se decidio
    por dedicarse a el, estudiando el Grado Superior en Desarrollo de Aplicaciones Multiplataforma.`;

    this.texto2 = `Dispuesto e interesado en aprender nuevas tecnologías, materias, técnicas, paradigmas o conocimientos en general.
    Comprometido, responsable y con una alta capacidad para trabajar en equipo y remoto. `;

    this.texto3 = `Experimentado tanto en desarrollo web como de aplicaciones multiplataforma en dispositivos smartphone y desktop como en
    desarrollo de aplicaciones web.`;

  }

}

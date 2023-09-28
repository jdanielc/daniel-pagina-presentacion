import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amplio',
  templateUrl: './amplio.component.html',
  styleUrls: ['./amplio.component.css']
})
export class AmplioComponent implements OnInit {

  textDam: string = `Titulación consistente en desarrollar, implantar, documentar y mantener
   aplicaciones informáticas multiplataforma, utilizando tecnologías y entornos de desarrollo 
   específicos, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de 
   «usabilidad» y calidad exigidas en los estándares establecidos. Durante el grado se enseñaron diversos lenguajes de 
   programación como Java 8, C#, Python, PHP o VisualBasic así como lenguaje de marcas, uso de frameworks y microframeworks,
   lenguajes de gestión de base de datos como SQL, PL/SQL o MongoDB. Todas estás tecnologías se impartieron con 
   la idea u orientación del desarrollo para dispositivos Android, o aplicaciones de escritorio.`;

   textBach = `El Bachillerato de Ciencias y Tecnología es una opción orientada a aquellos alumnos con intereses por estudiar carreras relacionadas con el mundo tecnológico y la ingenieria.
    `;
  constructor() { }

  ngOnInit(): void {
  }

}

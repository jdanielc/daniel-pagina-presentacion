import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  texto:string = '';
  ngOnInit(): void {
    this.texto = `Nacido en 1999 mostro desde una temprana edad una gran curiosidad e interes por la tecnología 
    y las telecomunicaciones. `;
  }

}

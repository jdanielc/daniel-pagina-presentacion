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
    this.texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus architecto temporibus, esse fugit iure! Eveniet neque voluptates officiis laboriosam aliquid quae, mollitia temporibus, a deserunt sapiente reiciendis modi asperiores.`;
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};
  muestraTitulo:boolean= false;
  mnsjBoton:string = '';

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService) {

      this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);      
      

    } )

    this.mnsjBoton = 'Mostrar título';
   }

   tituloShow(){
     this.muestraTitulo = !this.muestraTitulo;

     if(this.muestraTitulo){
        this.mnsjBoton = 'Ocultar título';
     }else{
       this.mnsjBoton = 'Mostrar título';
     }

   }

}

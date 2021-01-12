
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes: Heroe[] = [
        {
          nombre: "Java",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/java.jpg",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "C#",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/c.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "JavaScript",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/js.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "PHP",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/php.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Angular",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/angular.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "SQL",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/sql.jpg",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "SQL",
          bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti unde facere minima inventore omnis? Inventore laboriosam unde fuga quo soluta ratione! Architecto quo incidunt eligendi repellendus, iusto qui eius.",
          img: "assets/img/sql.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ]

    constructor(){
        console.log("Servicio listo para usarse");
    }

    getHeroes(): Heroe[]{
        return this.heroes;
    }
    getHeroe(idx: string){
      return this.heroes[idx];
    }

    buscarHeroes(termino: string): Heroe[]{
      let heroesArr: Heroe[] = [];
      termino = termino.toLowerCase();
      
      for(let i = 0; i<this.heroes.length; i++){
        let heroe = this.heroes[i];
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino) >= 0){
          heroe.idx = i;
          heroesArr.push(heroe);  

        }

      }

      return heroesArr;

    }
}


export interface Heroe{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?:number;
}

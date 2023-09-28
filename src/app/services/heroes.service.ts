
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes: Heroe[] = [
        {
          nombre: "Java",
          bio: "Conocimientos y experiencia en desarrollo movil, escritorio y backend-web usando Java version 6/8/11.",
          img: "assets/img/java.jpg",
          aparicion: "1941-11-01",
          casa:"DC",
          wiki: "Java es un lenguaje de programación y una plataforma informática comercializada por primera vez en 1995 por Sun Microsystems. Hay muchas aplicaciones y sitios web que no funcionarán a menos que tenga Java instalado y cada día se crean más. Java es rápido, seguro y fiable. Desde portátiles hasta centros de datos, desde consolas para juegos hasta súper computadoras, desde teléfonos móviles hasta Internet, Java está en todas partes."
        },
        {
          nombre: "C#",
          bio: "Conocimientos en desarrollo de aplicaciones de escritorio com c# y Visual Studio. ",
          img: "assets/img/c.png",
          aparicion: "1939-05-01",
          casa:"DC",
          wiki: "Es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma .NET, Su sintaxis básica deriva de C/C++ y utiliza el modelo de objetos de la plataforma .NET, similar al de Java, aunque incluye mejoras derivadas de otros lenguajes."
        },
        {
          nombre: "JavaScript",
          bio: "Conocimiento y experiencia en desarrollo front-end web con JavaScript",
          img: "assets/img/js.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel",
          wiki: "Es un lenguaje de programación interpretado, Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico. Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas"
        },
        {
          nombre: "PHP",
          bio: "Conocimiento en desarrollo back-end con PHP y microframeworks como SLIM.",
          img: "assets/img/php.png",
          aparicion: "1962-05-01",
          casa:"Marvel",
          wiki: "PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML. El código PHP suele ser procesado en un servidor web por un intérprete PHP implementado como un módulo, un daemon o como un ejecutable de interfaz de entrada común (CGI)."
        },
        {
          nombre: "Angular 10",
          bio: "Conocimiento inicial en desarrollo web front-end con Angular 10",
          img: "assets/img/angular.png",
          aparicion: "1940-06-01",
          casa: "DC",
          wiki: "Es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.",
          titulo: "assets/img/titulo_angular.jpg"
        },
        {
          nombre: "SQL",
          bio: "Conocimiento y experiencia en el uso de SQL en bases de datos relaciones.",
          img: "assets/img/sql.png",
          aparicion: "1962-08-01",
          casa: "Marvel",
          wiki: "Es un lenguaje de dominio específico utilizado en programación, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.2"
        },
        {
          nombre: "Agile",
          bio: "Conocimiento y experiencia en el funcionamiento de un projecto Agile y Scrum.",
          img: "assets/img/agile.png",
          aparicion: "1974-11-01",
          casa: "Marvel",
          wiki: "El desarrollo ágil de software envuelve un enfoque para la toma de decisiones en los proyectos de software, que se refiere a métodos de ingeniería del software basados en el desarrollo iterativo e incremental, donde los requisitos y soluciones evolucionan con el tiempo según la necesidad del proyecto. Así el trabajo es realizado mediante la colaboración de equipos autoorganizados y multidisciplinarios, inmersos en un proceso compartido de toma de decisiones a corto plazo."
        },
        {
          nombre: "Git",
          bio: "Conocimiento en el control de versiones de un proyecto usando Git",
          img: "assets/img/git.png",
          aparicion: "1974-11-01",
          casa: "Marvel",
          wiki: "Es un software de control de versiones diseñado pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente. Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos"
        },
        {
          nombre: "SCM",
          bio: "Conocimiento y experiencia en el control de versiones de un proyecto usando SCM",
          img: "assets/img/scm.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel",
          wiki: "Es la integración de los procesos de negocios desde un usuario final hasta los suplidores que proveen productos, servicios e información que añaden valor a los clientes en toda la cadena de suministro. Una de sus aplicaciones posibles es la de repositorio de versiones."
        },
        {
          nombre: "SVN",
          bio: "Conocimiento y experiencia en el control de versiones de un proyecto usando Apache Surversion",
          img: "assets/img/SVN.png",
          aparicion: "2000-10-20",
          casa: "Marvel",
          wiki: "Apache Subversion (abreviado frecuentemente como SVN, por el comando svn) es una herramienta de control de versiones open source basada en un repositorio cuyo funcionamiento se asemeja enormemente al de un sistema de ficheros. Es software libre bajo una licencia de tipo Apache/BSD. Es comun ser usado con otros programas de terceros/clientes como TortoiseSVN"
        },
        {
          nombre: "Selenium",
          bio: "Experiencia en la generación de soluciones automatizadas usando Selenium WebDriver en Java.",
          img: "assets/img/Selenium-java-logos.png",
          aparicion: "2004-01-01",
          casa: "Marvel",
          wiki: "Selenium es un entorno de pruebas de software para aplicaciones basadas en la web. Selenium provee una herramienta de grabar/reproducir para crear pruebas sin usar un lenguaje de scripting para pruebas (Selenium IDE). Incluye también un lenguaje específico de dominio para pruebas (Selenese) para escribir pruebas en un amplio número de lenguajes de programación populares incluyendo Java, C#, Ruby, Groovy, Perl, PHP y Python. Las pruebas pueden ejecutarse entonces usando la mayoría de los navegadores web modernos en diferentes sistemas operativos como Windows, Linux y OSX."
        },
        {
          nombre: "OpenCMS",
          bio: "Conocimiento y experiencia en la edición y desarrollo de páginas y entornos OpenCMS v8.",
          img: "assets/img/opencms.png",
          aparicion: "2002-01-01",
          casa: "Marvel",
          wiki: "OpenCms es un sistema de gestión de contenido de código abierto basado en Java y en tecnología XML. Es distribuido por la empresa Alkacon Software bajo licencia LGPL. Se trata de una aplicación CMS con características tales como Entorno de trabajo basado en navegador web, Gestión de activos, Sistemas de gestión de usuarios y permisos integrados, Publicación de contenidos basada en proyectos, Gestión de Workflow y tareas, Editor WYSIWYG, Soporte a la internacionalización, Versionado del contenido, Mecanismos de plantillas JSP y XML, Soporte Multi-idioma, ..."
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
    wiki?:string;
    titulo?: string;
}

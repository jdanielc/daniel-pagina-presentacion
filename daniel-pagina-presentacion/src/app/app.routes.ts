
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AmplioComponent } from './components/amplio/amplio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'estudios', component: AmplioComponent },
    { path: 'entrada/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'conocimientos', component: HeroesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'home'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

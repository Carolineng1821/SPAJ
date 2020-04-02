import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/inicio' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
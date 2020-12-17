import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { NotasComponent } from './pages/notas/notas.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: PortafolioComponent, canActivate: [AuthGuard] },
    {path: 'registro', component: RegistroComponent},
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'item', component: ItemComponent, canActivate: [AuthGuard]},
    {path: 'notas', component: NotasComponent, canActivate: [AuthGuard]},
    {path: 'search/:termino', component: SearchComponent, canActivate: [AuthGuard]},
    {path: '', component: LoginComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];


@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'evento', component: EventoComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  	exports: [ RouterModule ],
  	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
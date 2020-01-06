import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  { path: '', component: CategoriasComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: '**', component: Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

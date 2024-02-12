import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioModule} from "./pages/formulario/formulario.module";
import {MainModule} from "./pages/main/main.module";
import {ElementoModule} from "./pages/elemento/elemento.module";


// @ts-ignore
const routes: Routes = [

  { //importando el modulo Formularios
    path: '',
    loadChildren: () => import('./pages/formulario/formulario.module').then((m:any) => m.FormularioModule)
  },
  { //importando el modulo Formularios
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then((m:any) => m.MainModule)
  },
  { //importando el modulo Elemento --gg
    path: 'elemento',
    loadChildren: () => import('./pages/elemento/elemento.module').then((m:any) => m.ElementoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

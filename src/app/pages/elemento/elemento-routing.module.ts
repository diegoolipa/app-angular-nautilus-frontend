import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BindingComponent} from "./components/binding/binding.component";
import {EventsComponent} from "./components/events/events.component";
import {ControlComponent} from "./components/control/control.component";

const routes: Routes = [

  {
    path:'',
    component:BindingComponent,
  },
  {
    path: 'events', // Puedes cambiar esto a la ruta que necesites
    component: EventsComponent,
  },
  {
    path: 'control', // Puedes cambiar esto a la ruta que necesites
    component: ControlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementoRoutingModule { }

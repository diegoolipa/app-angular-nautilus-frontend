import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from "./formulario.component";
import {BasicFormComponent} from "./components/basic-form/basic-form.component";
import {BasicFormTwoComponent} from "./components/basic-form-two/basic-form-two.component";
import {MediumFormComponent} from "./components/medium-form/medium-form.component";
import {MediumFormTwoComponent} from "./components/medium-form-two/medium-form-two.component";
import {AdvancedFormComponent} from "./components/advanced-form/advanced-form.component";

const routes: Routes = [
  {
    path:'',
    component:FormularioComponent
  },
  {
    path:'basic',
    component:BasicFormComponent
  },
  {
    path:'basic-two',
    component:BasicFormTwoComponent
  },
  {
    path:'medium',
    component:MediumFormComponent
  },
  {
    path:'medium-two',
    component:MediumFormTwoComponent
  }
  ,
  {
    path:'advanced',
    component:AdvancedFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }

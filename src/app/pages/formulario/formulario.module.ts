import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbFormFieldModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule
} from "@nebular/theme";
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BasicFormTwoComponent } from './components/basic-form-two/basic-form-two.component';
import { MediumFormComponent } from './components/medium-form/medium-form.component';
import { MediumFormTwoComponent } from './components/medium-form-two/medium-form-two.component';
import { AdvancedFormComponent } from './components/advanced-form/advanced-form.component';
import {MessagesErrorModule} from "../shared/components/messages-error/messages-error.module";


@NgModule({
  declarations: [
    FormularioComponent,
    BasicFormComponent,
    BasicFormTwoComponent,
    MediumFormComponent,
    MediumFormTwoComponent,
    AdvancedFormComponent
  ],
    imports: [
        CommonModule,
        FormularioRoutingModule,
        NbCardModule,
        NbButtonModule,
        ReactiveFormsModule,  //Formularios reactivos
        NbInputModule,
        NbSelectModule,
        NbCheckboxModule,
        NbRadioModule,
        NbIconModule,
        NbFormFieldModule,
        MessagesErrorModule
    ]
})
export class FormularioModule { }

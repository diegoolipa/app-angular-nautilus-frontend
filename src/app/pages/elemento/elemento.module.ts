import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementoRoutingModule } from './elemento-routing.module';
import { ElementoComponent } from './elemento.component';
import { BindingComponent } from './components/binding/binding.component';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule, NbIconModule,
  NbInputModule, NbListModule,
  NbSelectModule,
  NbToggleModule
} from "@nebular/theme";
import { EventsComponent } from './components/events/events.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import { ControlComponent } from './components/control/control.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ElementoComponent,
    BindingComponent,
    EventsComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    ElementoRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbToggleModule,
    NbSelectModule,
    NbInputModule,
    NbFormFieldModule,
    // Iconos eva
    NbEvaIconsModule,
    NbIconModule,

    FormsModule,
    NbListModule,
  ]
})
export class ElementoModule { }

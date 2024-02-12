import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesErrorComponent} from "./messages-error.component";
import {MessagesErrorService} from "./messages-error.service";



@NgModule({
  declarations: [MessagesErrorComponent],
  imports: [CommonModule],
  exports:[MessagesErrorComponent],
  providers:[MessagesErrorService]
})
export class MessagesErrorModule { }

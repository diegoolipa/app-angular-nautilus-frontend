import {Component, Input} from '@angular/core';
import {MessagesErrorService} from './messages-error.service';

@Component({
  selector: 'app-messages-error',
  templateUrl: './messages-error.component.html',
  styleUrls: ['./messages-error.component.scss']

})
export class MessagesErrorComponent {
  @Input() control: any = {
    errors: [],
  };
  @Input() status: string = '';
  @Input() noTouched: boolean = false;

  constructor(private validator: MessagesErrorService) {

  }

  // @ts-ignore
  get valid():boolean{
    return this.control.valid
  }

  // @ts-ignore
  get inValid():boolean{
    return this.control.invalid
  }
  // @ts-ignore
  get messageError(): any {
    if (this.control.errors !== undefined) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && (!this.noTouched ? this.control.touched : true)) {
          return this.validator.getMessage(propertyName, this.control.errors[propertyName], this.control.errors[propertyName].requiredLength);
        }
      }
    }
    return null;
  }

}

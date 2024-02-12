import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesErrorService {

  getMessage(validatorName: string, validatorValue?: string, number?:number): any {
    const config: any = {
      required: 'Campo requerido',
      pattern: 'Caracteres invalido',
      maxlength: `El maximo de caracteres es ${number}`,
      minlength: `El monimo de caracteres es ${number}`,
      email: `Correo invalido`,
      diego: `No coencide con diego`,
    };

    return config[validatorName];
  }
}

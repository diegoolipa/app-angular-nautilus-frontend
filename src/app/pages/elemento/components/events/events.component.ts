import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  public value: any;
  public value2: any;
  public value3: any;
  public value4: any;
  contador:number = 0;

  onSelectChange(event: any) {
    // Accede al valor seleccionado con event.target.value
    this.value = event.target.value;
    console.log("Valor seleccionado:", event.target.value);
  }

  onSelectChangetwo(event: any) {
    // Accede al valor seleccionado con event
    this.value3 = event

    console.log("Valor seleccionado:", event);
  }


  onInputChange(event: any) {
    // Accede al valor del input con event.target.value
    this.value2 = event.target.value;
    console.log("Valor del input:", event.target.value);
  }


  click(){
    console.log('hiciste Click')
    this.contador++;
  }

  //OBJETO
  persona = {
    name:'Diego Lipa',
    age: 27,
    img: 'https://www.irontec.com/image/trainingsFull/49-AngularLogo.png'
  }


  onInputKeydown(event: any) {
    // Accede al valor del input con event.target.value
    this.value4 = event.target.value;
    console.log("Valor del input:", event.target.value);
  }

}

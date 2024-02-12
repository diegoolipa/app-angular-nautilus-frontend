import {Component} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  public welcome: any;


  campos:Campo[] = [
    {nombre:'Desarrollo Web', descripcion:'orem Ipsum is simply dummy text of the printing and typesetting industry. '},
    {nombre:'inteligencia artificail', descripcion:'y five centuries, but also'},
    {nombre:'CiberSeguridad', descripcion:'orem Ipsum is simply ok a galley of type and scrambled it to make a type  survived not only five centuries, but also'},
  ]


  name="Diego Lipa";
  age = 27;

  public disabled:boolean = true

  img = 'https://www.irontec.com/image/trainingsFull/49-AngularLogo.png'


  //OBJETO
  persona = {
    name:'Diego Lipa',
    age: 27,
    img: 'https://www.irontec.com/image/trainingsFull/49-AngularLogo.png'
  }

}

interface Campo{
  nombre:string;
  descripcion: string;
}

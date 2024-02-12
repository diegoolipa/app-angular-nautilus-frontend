import { AbstractControl } from '@angular/forms';

export class MyValidators {


  // static validaDiego(control: AbstractControl){
  //   const value = control.value;
  //   console.log(value)
  //   if (value !== 'diego'){
  //     return {diego : true}
  //   }
  //   return false
  // }

  static validaDiego(param1: number, param2: number) {
    return (control: AbstractControl,) => {
      const value = control.value;
      // console.log(value)
      // console.log(param1)
      // console.log(param2)
      if (value !== 'diego') {
        return {diego: true}
      }
      return false
    }
  }
}


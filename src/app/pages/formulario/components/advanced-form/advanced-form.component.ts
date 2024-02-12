import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../../../../utils/validators";

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent {
  form!:FormGroup;

  constructor(
    private formBuilder : FormBuilder,
  ) {
    this.buildForm();
  }



  save(event:any){
    console.log(this.form.value);
  }



  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3), Validators.pattern(/^[A-Za-z ]+$/)]],
        last: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[A-Za-z ]+$/)]],
      }),
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required,MyValidators.validaDiego(1,2)]],

    })
  }
}

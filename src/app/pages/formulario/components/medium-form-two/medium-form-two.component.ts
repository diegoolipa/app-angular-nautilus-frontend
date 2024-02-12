import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-medium-form-two',
  templateUrl: './medium-form-two.component.html',
  styleUrls: ['./medium-form-two.component.scss']
})
export class MediumFormTwoComponent implements OnInit{

  form!:FormGroup;


  constructor(
    private formBuilder : FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(
       (value:any) => {
        console.log(value)
      }
    )
    this.form.valueChanges
      .subscribe(
        (value:any) => {
          // console.log(value)
        }
      )
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      fullName:this.formBuilder.group({
        name: ['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[A-Za-z ]+$/)]],
        last: ['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[A-Za-z ]+$/)]],
      }),
      email: ['',[Validators.required, Validators.email]],
      tel: ['',Validators.required],
      color: ['#000000'],
      number: [18, [Validators.required, Validators.min(18),Validators.max(100)]],
      date: [''],
      range: [''],
      time:[''],
      text: [''],
      category: ['2'],
      tags: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone:[''],
    })
  }


  getNameValue(){
    console.log(this.nameField.value);
    console.log(this.form.get('fullName.name')!.value)
    console.log(this.form.get('fullName.last')!.value)
  }

  // @ts-ignore
  get isNameFieldValid(){
    return this.nameField.valid && this.nameField.touched
  }
  // @ts-ignore
  get isNameFieldInValid(){
    return this.nameField.invalid && this.nameField.touched
  }

  save(event:any){
    console.log(this.form.value);
  }
  // @ts-ignore
  get nameField(){
    return this.form.get('fullName.name')!;
  }

  // @ts-ignore
  get lastField(){
    return this.form.get('fullName')!.get('last')!;
  }

  // @ts-ignore
  get emailField(){
    return this.form.get('email')!;
  }

  // @ts-ignore
  get telField(){
    return this.form.get('tel')!;
  }
  // @ts-ignore
  get colorField(){
    return this.form.get('color')!;
  }
  // @ts-ignore
  get dateField(){
    return this.form.get('date')!;
  }
  // @ts-ignore
  get numberField(){
    return this.form.get('number')!;
  }
  // @ts-ignore
  get rangeField(){
    return this.form.get('range')!;
  }
  // @ts-ignore
  get timeField(){
    return this.form.get('time')!;
  }
  // @ts-ignore
  get textField(){
    return this.form.get('text')!;
  }
  // @ts-ignore
  get categoryField(){
    return this.form.get('category')!;
  }
  // @ts-ignore
  get tagsField(){
    return this.form.get('tags')!;
  }
  // @ts-ignore
  get agreeField(){
    return this.form.get('agree')!;
  }
  // @ts-ignore
  get genderField(){
    return this.form.get('gender')!;
  }
  // @ts-ignore
  get zoneField(){
    return this.form.get('zone')!;
  }
}

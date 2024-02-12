import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as events from "events";
// @ts-ignore

@Component({
  selector: 'app-medium-form',
  templateUrl: './medium-form.component.html',
  styleUrls: ['./medium-form.component.scss']
})
export class MediumFormComponent implements OnInit{


  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(10)],[]),
    email: new FormControl(''),
    tel: new FormControl(''),
    color: new FormControl('#000000'),
    number: new FormControl(''),
    date: new FormControl(''),
    range: new FormControl(''),
    time: new FormControl(''),
    text: new FormControl(''),
    category: new FormControl('2'),
    tags: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  })


  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(
      value => {
        console.log(value)
      }
    )
  }



  getNameValue(){
    console.log(this.nameField.value);
  }

  get isNameFieldValid(){
    return this.nameField.valid && this.nameField.touched
  }
  get isNameFieldInValid(){
    return this.nameField.invalid && this.nameField.touched
  }

  save(event:any){
    console.log(this.form.value);
  }

  get nameField(){
    return this.form.get('name')!;
  }

  get emailField(){
    return this.form.get('email')!;
  }
  get telField(){
    return this.form.get('tel')!;
  }
  get colorField(){
    return this.form.get('color')!;
  }
  get dateField(){
    return this.form.get('date')!;
  }
  get numberField(){
    return this.form.get('number')!;
  }
  get rangeField(){
    return this.form.get('range')!;
  }
  get timeField(){
    return this.form.get('time')!;
  }
  get textField(){
    return this.form.get('text')!;
  }
  get categoryField(){
    return this.form.get('category')!;
  }
  get tagsField(){
    return this.form.get('tags')!;
  }
  get agreeField(){
    return this.form.get('agree')!;
  }
  get genderField(){
    return this.form.get('gender')!;
  }
  get zoneField(){
    return this.form.get('zone')!;
  }
}

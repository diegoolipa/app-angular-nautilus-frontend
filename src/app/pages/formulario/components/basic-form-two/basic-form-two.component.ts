import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-basic-form-two',
  templateUrl: './basic-form-two.component.html',
  styleUrls: ['./basic-form-two.component.scss']
})
export class BasicFormTwoComponent implements OnInit{
  nameField = new FormControl('',[Validators.required, Validators.maxLength(10)],[])
  emailField = new FormControl('')
  telField = new FormControl('')
  colorField = new FormControl('#000000')
  numberField = new FormControl('')
  dateField = new FormControl('')
  rangeField = new FormControl('')
  timeField = new FormControl('')
  textField = new FormControl('')


  categoryField = new FormControl('2');
  tagsField = new FormControl('')

  agreeField = new FormControl(false)
  genderField = new FormControl('')
  zoneField = new FormControl('')

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(
      (value:any) => {
        console.log(value)
      }
    )
  }

  getNameValue(){
    console.log(this.nameField.value);
  }

  // @ts-ignore
  get isNameFieldValid(){
    return this.nameField.valid && this.nameField.touched
  }
  // @ts-ignore
  get isNameFieldInValid(){
    return this.nameField.invalid && this.nameField.touched
  }
}

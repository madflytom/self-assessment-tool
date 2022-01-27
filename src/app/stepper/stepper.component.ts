import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  goodValue:any;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;
  explanationValue = "";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      gradeLevel: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      goodPerson: ['', Validators.required],
    });
  }

  formatLabel(value: number) {
    return value;
  }

  updateForm(value: number){
    
    this.secondFormGroup.controls["goodPerson"].setValue(value);

  }
  updateLabel(event: MatSliderChange){
    console.log(event.value)
    switch(event.value) {
      
      case 1:
        this.explanationValue = "Do more";
        break;
      case 2:
        this.explanationValue = "You're doing the bare min.  You could do better.";
        break;
      default:
        this.explanationValue = "work";
    }

    console.log(this.explanationValue);
  }

}

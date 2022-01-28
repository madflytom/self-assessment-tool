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
  thirdFormGroup!: FormGroup;

  goodValue:any;
  goodValue2:any;

  value = 0;
  value2 = 0;
  explanationValue = "Drag the slider to choose the behavior that best describes you.";
  explanationValue2 = "Drag the slider to choose the behavior that best describes you.";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      gradeLevel: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      goodPerson: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      goodWork: ['', Validators.required],
    });
  }

  updateForm(value: number){
    this.secondFormGroup.controls["goodPerson"].setValue(value);
  }
  updateForm2(value: number){
    console.log(value);
    this.thirdFormGroup.controls["goodWork"].setValue(value);
  }

  updateLabel(event: MatSliderChange){
    console.log(event.value)
    switch(event.value) {
      
      case 1:
        this.explanationValue = "Do more";
        break;
      case 2:
        this.explanationValue = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nisi sapien. Phasellus maximus laoreet vehicula.</p><p>Aliquam urna nunc, pharetra nec vestibulum eget, luctus a elit. Duis et eros vitae mi luctus sodales quis a felis. Integer vestibulum interdum iaculis. Aenean tincidunt risus non euismod tristique. Curabitur dictum rutrum convallis. In odio lacus, sodales a ultricies vitae, fringilla ac tellus.</p><p>Proin ullamcorper quis ex vel accumsan. Suspendisse malesuada mi et nunc viverra finibus. In at nisi commodo dolor posuere scelerisque. Nullam sagittis tortor ornare, blandit enim vel, lacinia lacus. Pellentesque maximus massa nec imperdiet vulputate. In hendrerit, leo id dapibus egestas, quam ligula accumsan ante, id accumsan mauris ante non leo.</p>";
        break;
      default:
        this.explanationValue = "Drag the slider to choose the behavior that best describes you.";
    }

    console.log(this.explanationValue);
  }

  updateLabel2(event: MatSliderChange){
    console.log(event.value)
    switch(event.value) {
      
      case 1:
        this.explanationValue2 = "Do more";
        break;
      case 2:
        this.explanationValue2 = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nisi sapien. Phasellus maximus laoreet vehicula.</p><p>Aliquam urna nunc, pharetra nec vestibulum eget, luctus a elit. Duis et eros vitae mi luctus sodales quis a felis. Integer vestibulum interdum iaculis. Aenean tincidunt risus non euismod tristique. Curabitur dictum rutrum convallis. In odio lacus, sodales a ultricies vitae, fringilla ac tellus.</p><p>Proin ullamcorper quis ex vel accumsan. Suspendisse malesuada mi et nunc viverra finibus. In at nisi commodo dolor posuere scelerisque. Nullam sagittis tortor ornare, blandit enim vel, lacinia lacus. Pellentesque maximus massa nec imperdiet vulputate. In hendrerit, leo id dapibus egestas, quam ligula accumsan ante, id accumsan mauris ante non leo.</p>";
        break;
      default:
        this.explanationValue2 = "Drag the slider to choose the behavior that best describes you.";
    }

    console.log(this.explanationValue2);
  }

}

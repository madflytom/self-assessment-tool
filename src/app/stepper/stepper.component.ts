import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;

  value = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;

  finalValue = 0;
  finalExplanation = "";
  finalRating = "";
  compMode = false;

  explanationValue = "Drag the slider to choose the behavior that best describes you.";
  compExplanationValue = "";

  explanationValue2 = "Drag the slider to choose the behavior that best describes you.";
  compExplanationValue2 = "";

  explanationValue3 = "Drag the slider to choose the behavior that best describes you.";
  compExplanationValue3 = "";

  explanationValue4 = "Drag the slider to choose the behavior that best describes you.";
  compExplanationValue4 = "";

  explanationValue5 = "Drag the slider to choose the behavior that best describes you.";
  compExplanationValue5 = "";

  defaultComp = {
    "1": "",
    "2": "",
    "3": "",
    "4": "",
  }

  Level1Comp = {
    "1": "Sometimes falls short of required standards. May require close management to ensure appropriate effort. Occasionally appears unaware of how own failings can impact others.",
    "2": "Normally completes work on time and to required standards. Is willing, sometimes unprompted, to adjust priorities and standards. Is reasonably well informed about how own efforts affect others. Generally strives hard.",
    "3": "Consistently strives to adjust priorities & standards in line with business needs. Rarely misses deadlines. Responds rapidly to changed requirements.",
    "4": "Always crystal clear about priorities. Never misses crucial deadlines. Often anticipates changed requirements. Consistently delivers at or beyond agreed standards.",
  }

  Level2Comp = {
    "1": "Is sometimes unable or unwilling to 'raise the game' when faced with a challenge. Sometimes looks to support others. Requires guidance to operate within budget / resource constraints.",
    "2": "Normally responds positively to challenges, sometimes exceeding reasonable expectations. Genearlly perseveres with tough assignments. Helps others with time allows. Normally operates within resource constraints.",
    "3": "Consistently strives to meet demanding standards and seldom admits defeat. Works hard to find the time and resources to help others. Consistently operates within resource constraints.",
    "4": "Actively seeks out challenging tasks and always sees them through. Always makes time to help colleagues succeed. Always gets the max from available resources.",
  }

  Level3Comp = {
    "1": "Sometimes meets and occasionally falls short of set standards. Sometimes encourages high performance in others. Tends to excuses or blame when things go wrong. Takes corrective action when asked to do so.",
    "2": "Normally works to high standards and is pretty demanding of others. Follows a practical 'can and will do' approach most of the time. Acts quickly when asked to take corrective action.",
    "3": "Consistently strives to meet high standards and encourages colleagues to do the same. Seldom shirks accountability . Turns goals into actions and tries to keep others informed. Acts rapidly to bring failing plans back on track.",
    "4": "Always meets and often exceeds high performance standards. Stretches others in support of the business. Rigorously plans, always informs and proactively prevents plans from falling short.",
  }

  Level4Comp = {
    "1": "Sometimes demonstrates a good grasp of strategy and business demands. Doesn't always manage obstacles that threaten business goals. Sometimes struggles to use metrics to drive performance. Sometimes needs encouragement to promote the need for success.",
    "2": "Normally promotes the vision and business goals. Tackles obstacles that threaten business goals. Normally makes good use of financial and other management data. Normally promotes the need for colleagues to contribute to continuing business success.",
    "3": "Has a clear view of vision and supporting strategies and consistently shares with others. Anticipates most obstables and always acts to overcome them. Understands metrics and the way the business fits together and uses them to reinforce commitment in others.",
    "4": "Inspires others by developing and giving meaning to a challenging visions and supporting strategies. Always thinks ahead, preventing obstacles from harming business goals. Demonstrates mastery of metrics and levers that deliver. Consistently instills a will to win in others.",
  }

  defaultCompLevels = {
    "focus": this.defaultComp,
    "innovate": this.defaultComp,
    "develop": this.defaultComp,
    "work": this.defaultComp,
    "done": this.defaultComp
  }

  AD1CompLevels = {
    "focus": this.Level2Comp,
    "innovate": this.Level1Comp,
    "develop": this.Level1Comp,
    "work": this.Level2Comp,
    "done": this.Level1Comp
  }

  AD2CompLevels = {
    "focus": this.Level2Comp,
    "innovate": this.Level2Comp,
    "develop": this.Level2Comp,
    "work": this.Level2Comp,
    "done": this.Level2Comp
  }

  AD3CompLevels = {
    "focus": this.Level2Comp,
    "innovate": this.Level3Comp,
    "develop": this.Level2Comp,
    "work": this.Level3Comp,
    "done": this.Level3Comp
  }

  AD4CompLevels = {
    "focus": this.Level3Comp,
    "innovate": this.Level3Comp,
    "develop": this.Level3Comp,
    "work": this.Level3Comp,
    "done": this.Level3Comp
  }

  AD5CompLevels = {
    "focus": this.Level3Comp,
    "innovate": this.Level4Comp,
    "develop": this.Level3Comp,
    "work": this.Level4Comp,
    "done": this.Level3Comp
  }

  finalCompExplanation = {
    1: {
      "Rating": "Improvement Needed",
      "RatingExp": "May sometimes meet, but also does not meet. For some duties requires constant guidance, coaching and monitoring. Does not meet objectives in all areas."
    },
    2: {
      "Rating": "Meets Expectations",
      "RatingExp": "Meets expectations, occasionally exceeds. Requires little guidance and coaching for day to day duties. More guidance is required for duties / tasks new to the role or person. Meets objectives or occasionally exceeds."
    },
    3: {
      "Rating": "Exceeds Expections",
      "RatingExp": "Consistently meets, often exceeds. Often guides and coaches others. Requires some guidance when venturing into new territory. Consistently meets objectives, often exceeds."
    },
    4: {
      "Rating": "Far Exceeds Expectations",
      "RatingExp": "Consistently exceeds. Sets new standards. Requires no guidance or coaching for own responsibilities/tasks. Guides and coaches others. Consistently exceeds objectives"
    }
  }

  compLevel = this.AD1CompLevels;
  compareModeLevel = this.AD1CompLevels;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      gradeLevel: ['', Validators.required],
      compMode: [],
      compGradeLevel: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      goodPerson: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      goodWork: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      developWork: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      collabWork: ['', Validators.required],
    });
    this.sixthFormGroup = this._formBuilder.group({
      doneWork: ['', Validators.required],
    });
  }

  updateForm(value: number) {
    this.secondFormGroup.controls["goodPerson"].setValue(value);
  }

  updateForm2(value: number) {
    console.log(value);
    this.thirdFormGroup.controls["goodWork"].setValue(value);
  }

  updateForm3(value: number) {
    this.fourthFormGroup.controls["developWork"].setValue(value);
  }

  updateForm4(value: number) {
    this.fifthFormGroup.controls["collabWork"].setValue(value);
  }

  updateForm5(value: number) {
    this.sixthFormGroup.controls["doneWork"].setValue(value);
  }

  // TODO: Work on a method that will do this work without all the repeating code.  
  // This is just prototype right now, but can be much more DRY once the concept is ironed out.
  updateLabel(event: MatSliderChange) {
    switch (event.value) {
      case 1:
        this.explanationValue = this.compLevel["focus"][1];
        this.compExplanationValue = this.compareModeLevel["focus"][1];
        break;
      case 1.5:
        this.explanationValue = this.compLevel["focus"][1];
        this.compExplanationValue = this.compareModeLevel["focus"][1];
        break;
      case 2:
        this.explanationValue = this.compLevel["focus"][2];
        this.compExplanationValue = this.compareModeLevel["focus"][2];
        break;
      case 2.5:
        this.explanationValue = this.compLevel["focus"][2];
        this.compExplanationValue = this.compareModeLevel["focus"][2];
        break;
      case 3:
        this.explanationValue = this.compLevel["focus"][3]
        this.compExplanationValue = this.compareModeLevel["focus"][3];
        break;
      case 3.5:
        this.explanationValue = this.compLevel["focus"][3]
        this.compExplanationValue = this.compareModeLevel["focus"][3];
        break;
      case 4:
        this.explanationValue = this.compLevel["focus"][4]
        this.compExplanationValue = this.compareModeLevel["focus"][4];
        break;
      default:
        this.explanationValue = "Drag the slider to choose the behavior that best describes you.";
        this.compExplanationValue = "";
    }
  }

  updateLabel2(event: MatSliderChange) {
    switch (event.value) {
      case 1:
        this.explanationValue2 = this.compLevel["innovate"][1];
        this.compExplanationValue2 = this.compareModeLevel["innovate"][1];
        break;
      case 1.5:
        this.explanationValue2 = this.compLevel["innovate"][1];
        this.compExplanationValue2 = this.compareModeLevel["innovate"][1];
        break;
      case 2:
        this.explanationValue2 = this.compLevel["innovate"][2];
        this.compExplanationValue2 = this.compareModeLevel["innovate"][2];
        break;
      case 2.5:
        this.explanationValue2 = this.compLevel["innovate"][2];
        this.compExplanationValue2 = this.compareModeLevel["innovate"][2];
        break;
      case 3:
        this.explanationValue2 = this.compLevel["innovate"][3]
        this.compExplanationValue2 = this.compareModeLevel["innovate"][3];
        break;
      case 3.5:
        this.explanationValue2 = this.compLevel["innovate"][3]
        this.compExplanationValue2 = this.compareModeLevel["innovate"][3];
        break;
      case 4:
        this.explanationValue2 = this.compLevel["innovate"][4]
        this.compExplanationValue2 = this.compareModeLevel["innovate"][4];
        break;
      default:
        this.explanationValue2 = "Drag the slider to choose the behavior that best describes you.";
        this.compExplanationValue2 = "";
    }
  }

  updateLabel3(event: MatSliderChange) {
    switch (event.value) {
      case 1:
        this.explanationValue3 = this.compLevel["develop"][1];
        this.compExplanationValue3 = this.compareModeLevel["develop"][1];
        break;
      case 1.5:
        this.explanationValue3 = this.compLevel["develop"][1];
        this.compExplanationValue3 = this.compareModeLevel["develop"][1];
        break;
      case 2:
        this.explanationValue3 = this.compLevel["develop"][2];
        this.compExplanationValue3 = this.compareModeLevel["develop"][2];
        break;
      case 2.5:
        this.explanationValue3 = this.compLevel["develop"][2];
        this.compExplanationValue3 = this.compareModeLevel["develop"][2];
        break;
      case 3:
        this.explanationValue3 = this.compLevel["develop"][3]
        this.compExplanationValue3 = this.compareModeLevel["develop"][3];
        break;
      case 3.5:
        this.explanationValue3 = this.compLevel["develop"][3]
        this.compExplanationValue3 = this.compareModeLevel["develop"][3];
        break;
      case 4:
        this.explanationValue3 = this.compLevel["develop"][4]
        this.compExplanationValue3 = this.compareModeLevel["develop"][4];
        break;
      default:
        this.explanationValue3 = "Drag the slider to choose the behavior that best describes you.";
        this.compExplanationValue3 = "";
    }
  }

  updateLabel4(event: MatSliderChange) {
    switch (event.value) {
      case 1:
        this.explanationValue4 = this.compLevel["work"][1];
        this.compExplanationValue4 = this.compareModeLevel["work"][1];
        break;
      case 1.5:
        this.explanationValue4 = this.compLevel["work"][1];
        this.compExplanationValue4 = this.compareModeLevel["work"][1];
        break;
      case 2:
        this.explanationValue4 = this.compLevel["work"][2];
        this.compExplanationValue4 = this.compareModeLevel["work"][2];
        break;
      case 2.5:
        this.explanationValue4 = this.compLevel["work"][2];
        this.compExplanationValue4 = this.compareModeLevel["work"][2];
        break;
      case 3:
        this.explanationValue4 = this.compLevel["work"][3]
        this.compExplanationValue4 = this.compareModeLevel["work"][3];
        break;
      case 3.5:
        this.explanationValue4 = this.compLevel["work"][3]
        this.compExplanationValue4 = this.compareModeLevel["work"][3];
        break;
      case 4:
        this.explanationValue4 = this.compLevel["work"][4]
        this.compExplanationValue4 = this.compareModeLevel["work"][4];
        break;
      default:
        this.explanationValue4 = "Drag the slider to choose the behavior that best describes you.";
        this.compExplanationValue4 = ""
    }
  }

  updateLabel5(event: MatSliderChange) {
    switch (event.value) {
      case 1:
        this.explanationValue5 = this.compLevel["done"][1];
        this.compExplanationValue5 = this.compareModeLevel["done"][1];
        break;
      case 1.5:
        this.explanationValue5 = this.compLevel["done"][1];
        this.compExplanationValue5 = this.compareModeLevel["done"][1];
        break;
      case 2:
        this.explanationValue5 = this.compLevel["done"][2];
        this.compExplanationValue5 = this.compareModeLevel["done"][2];
        break;
      case 2.5:
        this.explanationValue5 = this.compLevel["done"][2];
        this.compExplanationValue5 = this.compareModeLevel["done"][2];
        break;
      case 3:
        this.explanationValue5 = this.compLevel["done"][3];
        this.compExplanationValue5 = this.compareModeLevel["done"][3];
        break;
      case 3.5:
        this.explanationValue5 = this.compLevel["done"][3];
        this.compExplanationValue5 = this.compareModeLevel["done"][3];
        break;
      case 4:
        this.explanationValue5 = this.compLevel["done"][4];
        this.compExplanationValue5 = this.compareModeLevel["done"][4];
        break;
      default:
        this.explanationValue5 = "Drag the slider to choose the behavior that best describes you.";
        this.compExplanationValue5 = "";
    }
  }

  finalCalc() {
    this.finalValue = (this.value + this.value2 + this.value3 + this.value4 + this.value5) / 5;

    if (this.finalValue >= 1 && this.finalValue < 2) {
      this.finalRating = this.finalCompExplanation[1].Rating;
      this.finalExplanation = this.finalCompExplanation[1].RatingExp;
    } else if (this.finalValue >= 2 && this.finalValue < 3) {
      this.finalRating = this.finalCompExplanation[2].Rating;
      this.finalExplanation = this.finalCompExplanation[2].RatingExp;
    } else if (this.finalValue >= 3 && this.finalValue < 4) {
      this.finalRating = this.finalCompExplanation[3].Rating;
      this.finalExplanation = this.finalCompExplanation[3].RatingExp;
    } else if (this.finalValue = 4) {
      this.finalRating = this.finalCompExplanation[4].Rating;
      this.finalExplanation = this.finalCompExplanation[4].RatingExp;
    }
  }

  setCompLevel() {
    console.log(this.firstFormGroup.controls["gradeLevel"].value);
    switch (this.firstFormGroup.controls["gradeLevel"].value) {
      case 109:
        this.compLevel = this.AD1CompLevels;
        break;
      case 110:
        this.compLevel = this.AD2CompLevels;
        break;
      case 111:
        this.compLevel = this.AD3CompLevels;
        break;
      case 112:
        this.compLevel = this.AD4CompLevels;
        break;
      case 113:
        this.compLevel = this.AD5CompLevels;
        break;
      default:
        this.compLevel = this.defaultCompLevels;
    }
    if(this.firstFormGroup.controls["compMode"].value){
      this.setCompareModeLevel();
    }
    console.log(this.compLevel);
  }

  setCompareModeLevel() {
    console.log(this.firstFormGroup.controls["compGradeLevel"].value);
    switch (this.firstFormGroup.controls["compGradeLevel"].value) {
      case 109:
        this.compareModeLevel = this.AD1CompLevels;
        break;
      case 110:
        this.compareModeLevel = this.AD2CompLevels;
        break;
      case 111:
        this.compareModeLevel = this.AD3CompLevels;
        break;
      case 112:
        this.compareModeLevel = this.AD4CompLevels;
        break;
      case 113:
        this.compareModeLevel = this.AD5CompLevels;
        break;
      default:
        this.compareModeLevel = this.defaultCompLevels;
    }
    console.log(this.compareModeLevel);
  }

}

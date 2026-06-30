import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
   courseName: string = "angular 20 tutorial";
   productPrice:  number=12500;
   maxLength: number = 5;

   minChar: number= 3;
  inputType: string = "radio";
  myClassName: string ="myColor";
  constructor() {
  }
  showWelcomeMessage() {
  alert("welcome to angular 20")
    }
    changeCourseName(){
      this.courseName="ReactJs Tutorial"
    }
  onCityChnage(){
    alert("city")
  }
  
}

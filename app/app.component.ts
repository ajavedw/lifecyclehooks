import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _number: number = 2333;
  private _getsetTest: number = 5;

  get gsTest(){
    return this._getsetTest;
  }
  set gsTest(value:number){
    debugger
    this._getsetTest = value;
  }
    get number(){
      return this._number;
    }
    set number(value){
      this._number.valueOf;
    }
    increment(){
      this._number++;
    }

    decrement(){
      this._number--;
    }
    constructor(){
      this.gsTest = 4;
      console.log(this.gsTest);
      console.log(this._getsetTest);

    }

}

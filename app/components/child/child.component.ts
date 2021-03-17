import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  private myNumber: number;
  @Input() myName: string;

  @Input()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }
  get myNewNumber() {
    return this.myNumber;
  }

  @Input() myNameDoCheck: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    const checkChange = changes.myNewNumber;
    debugger
    if (checkChange.firstChange === false) {
      console.log('value print after change previousValue ' + checkChange.previousValue);

    } else {
      console.log('since first change is true previousValue is ' + checkChange.previousValue);
    }

    console.log('value print after change currentValue ' + checkChange.currentValue);
  }

  ngOnInit(): void {
    console.log('myNEWnUMBER IS ' + this.myNewNumber);

  }

  ngDoCheck(): void {
    debugger
  }

}

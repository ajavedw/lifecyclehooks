import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  private myNumber: number;
  @Input()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }
  get myNewNumber() {
    return this.myNumber;
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    const newNumberChange: SimpleChange = changes.myNewNumber;
    console.log('prev val  - ng on change', newNumberChange.previousValue);
    console.log('curr val  - ng on change', newNumberChange.currentValue);
    console.log('printed');

  }
  ngOnInit(): void {
  }

}

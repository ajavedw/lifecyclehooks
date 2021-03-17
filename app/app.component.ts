import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _number: number = 2333;

  public name: string = 'adnan';

  get number() {
    return this._number;
  }
  set number(value) {
    this._number = value;
  }
  increment() {
    this.number++;
  }

  decrement() {
    this.number--;
  }

    //for docheck

    public nameDoCheck: string = 'adnanja';

    user = {
      name: 'adnanj'
    }

    updateValue(){
      this.user.name = 'adnanjaved';
    }


}


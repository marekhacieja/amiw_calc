import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private input = '';
  private firstNumber = 0;
  private secondNumber = 0;
  private operationSign: string;

  private validate(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.result();
    }
    if (event.key === 'c') {
      this.clear();
    }
    if (event.key === '+' || event.key === '-') {
      this.pressKey(event.key);
    }
    if (event.key !== '0' && event.key !== '1') {
      event.preventDefault();
    }
  }

  private pressKey(inputKey: string) {
    if (inputKey === '1' || inputKey === '0') {
      this.input += inputKey;
    }
    this.pressOperationSign(inputKey);
  }

  private result() {
    if (this.input !== '') {
      this.secondNumber = parseInt(this.input, 2);
    }
    this.input = this.getResult();
  }

  private clear() {
    this.input = '';
    this.operationSign = '';
    this.secondNumber = 0;
    this.firstNumber = 0;
  }

  private pressOperationSign(inputSign: string) {
    if (this.input === '') {
      return;
    }
    if (inputSign === '+' || inputSign === '-') {
      this.operationSign = inputSign;
      this.setFirstValue();
    }
  }

  private setFirstValue() {
    if (this.firstNumber === 0) {
      this.firstNumber = parseInt(this.input, 2);
      this.input = '';
    }
  }

  private getResult(): string{
    if (this.operationSign === '+') {
      return (this.firstNumber + this.secondNumber).toString(2);
    }
    if (this.operationSign === '-') {
      return (this.firstNumber - this.secondNumber).toString(2);
    }
  }
}

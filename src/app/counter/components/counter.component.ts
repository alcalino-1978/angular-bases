import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>Counter:  {{ counter }}</h3>
<button (click)="handleButton(-1)">-1</button>
<button (click)="handleButton(+1)">+1</button>
<button (click)="restoreCounter()">RESET</button>`,
})
export class CounterComponent {
    counter: number = 10;
  counterCopy: number = this.counter;

  ngOnInit(): void {
    this.counterCopy = this.counter;
  }

  handleButton(value: number): void {
    this.counter += value;
  }

  restoreCounter(): void {
    this.counter = this.counterCopy;
  }
}

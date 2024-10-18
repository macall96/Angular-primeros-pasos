import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
     <h3>Counter: {{counter}}</h3>

     <button (click)="incremento(1)">+1</button>
     <button (click)="decremento(1)">-1</button>
     <button (click)="reseteo()">Reset</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  incremento(argumento: number): void {
    this.counter += argumento;
  }

  decremento(argumento: number): void {
    this.counter -= argumento;
  }

  reseteo(): void {
    this.counter = 10;
  }

}

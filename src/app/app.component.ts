import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
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

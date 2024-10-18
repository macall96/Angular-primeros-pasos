import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public arregloHeroes: string[] = ['Spiderman', 'Thor', 'Blade', 'Hawkeye', 'Black Panther'];
  public deletedHero: string | undefined = '';

  removeLastHero(): void {
    this.deletedHero = this.arregloHeroes.pop();
  }
}

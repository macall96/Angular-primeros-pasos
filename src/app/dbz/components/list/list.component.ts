import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListDBZComponent {

  @Input()
  public characterList: Character[] = [{
    id: 'cdscdscsdcds757',
    name: 'Trunks',
    power: 90
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  emitId = (id?:string) :void => {
    if (!id) return //Si el Character no tuviese id y por tanto no recibe nada, no hace nada, no realiza el emit
    this.onDelete.emit(id)
  }

}

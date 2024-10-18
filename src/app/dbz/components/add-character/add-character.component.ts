import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
   };

   emitCharacter() {
    //Peueña validación para que el formulario no acepte personajes si nombre
    if (this.character.name.length === 0) return;
    //Pasamos mejor un objeto para asegurarnos de que mandamos el objeto de tipo Character, esto no sería necesario pero si lo paso
    //directmanete como this.character la app no se comporta como deberías.
    this.onNewCharacter.emit({...this.character});
    this.character.name = ''
    this.character.power = 0
   }
}

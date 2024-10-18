import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})


export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter = (character: Character) :void => {
    //Aquí utilizamos el spread operator para crear un objeto con id y todas las propiedades que tenga el objeto caracter que se recibe como parámetro
    //Así, si el objeto Character tuviese muchas propiedades, las adjudicamos todas sin tener que ir una a una
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
}

  deleteCharacterById = (id: string) => {
    this.characters = this.characters.filter( character  => character.id !== id);
}

}

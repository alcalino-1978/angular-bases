import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 5000 },
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.characters)
  }

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacter(id: string): void {
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}

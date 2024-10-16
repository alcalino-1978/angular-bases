import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {

@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter()

  character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }
  emitCharacter() {
    console.log(this.character);

    if((this.character.name.length === 0) || (this.character.power === 0)) {
      return;
    }

    this.onNewCharacter.emit(this.character);

    this.character = {
      id:'',
      name: '',
      power: 0
    }
  }
 }

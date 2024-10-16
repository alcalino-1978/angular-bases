import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() characterList: Character[] = [];
  @Output() characterDeleted: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log(this.characterList)
  }

  deleteCharacter(character: Character): void {
    console.log(character.name);
    if (!character.id) {
      return;
    }
    this.characterDeleted.emit(character.id)
  }
}

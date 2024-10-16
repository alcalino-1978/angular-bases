import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})


export class MainPageComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private dbzService: DbzService
  ) {}

  ngOnInit(): void {
    this.characters = this.dbzService.characters;
  }

  deleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}

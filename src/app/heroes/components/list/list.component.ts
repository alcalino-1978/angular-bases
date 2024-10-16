import { Component } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Ironan', 'Hulk', 'Thor', 'Captain America'];
  deletedHero: string = '';

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop() as string;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [AppRoutingModule, CommonModule],
  exports: [HeroComponent, ListComponent],
})
export class HeroeModule {}

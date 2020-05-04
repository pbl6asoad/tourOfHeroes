import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Alexey' },
      { id: 12, name: 'Ruslan' },
      { id: 13, name: 'Kirill M' },
      { id: 14, name: 'Kirill L' },
      { id: 15, name: 'Yuriy' },
      { id: 16, name: 'Viktoria' },
      { id: 17, name: 'Gleb' },
      { id: 18, name: 'Ilya' },
      { id: 19, name: 'Dmitriy' },
      { id: 20, name: 'Vladislav' }
    ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
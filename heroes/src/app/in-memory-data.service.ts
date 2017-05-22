/**
 * Created by david on 22/05/17.
 */
import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr. Wood' },
      { id: 2, name: 'Welsh' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Clair' },
      { id: 5, name: 'Magda' },
      { id: 6, name: 'Alice' },
      { id: 7, name: 'Fred' },
      { id: 8, name: 'Dr Woo' },
      { id: 9, name: 'John' },
      { id: 10, name: 'Miss Someone' },
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'}
    ];
    return {heroes};
  }
}

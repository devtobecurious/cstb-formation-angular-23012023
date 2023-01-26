import { Injectable, inject } from '@angular/core';
import { SelfieDatalayer } from './selfie.layer';
import { Observable, map } from 'rxjs';
import { Selfie } from '../models';
import { GetAll } from '../../../core/models';
import { mockGetAll } from './mocks';


@Injectable({
  providedIn: 'root',
  // useValue: mockGetAll
  // useFactory: () => mockGetAll => c'était durant les tests avant que l'api soit finie
})
export class SelfieBusiness implements GetAll<Selfie> {
  // private dal = inject(SelfieDatalayer);

  constructor(private readonly dal: SelfieDatalayer) { }

  getAll(): Observable<Selfie[]> {
    return this.dal.getAll().pipe(
      map(item => item.results.map(result => ({ titre: result.name, description: `${result.height} ${result.mass}`, date: new Date()  }) ))
    );
  }
}

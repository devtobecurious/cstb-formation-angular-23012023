import { Injectable } from '@angular/core';
import { GetAll } from '../../../core/models';
import { Selfie } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type ResultSelfie = {
  results: [
    {
      name: string,
      height: number,
      mass: number
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class SelfieDatalayer  {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<ResultSelfie> {
    return this.httpClient.get<ResultSelfie>('https://swapi.dev/api/people');
  }
}

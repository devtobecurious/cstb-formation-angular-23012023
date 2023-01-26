import { Observable } from "rxjs";

export interface Result<T> {
  success: boolean,
  // error: Error,
  item: T;
}

export interface GetAll<T> {
  getAll(): Observable<T[]>;
}

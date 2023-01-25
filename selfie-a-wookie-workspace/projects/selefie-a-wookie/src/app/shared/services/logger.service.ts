import { Injectable } from '@angular/core';

export interface ToLog  {
  log(mess: string, ...params: any[]): void;
}

const unLogViteFait: ToLog = {
  log(mess: string, ...params: any[]): void {
    console.error(mess, params);
  }
};

const isProd = false;

const factoryLogger = () => isProd ? unLogViteFait : new LoggerService();

@Injectable({
  providedIn: 'root', // root: Singleton // et ça permet le TreeShaking  => pas besoin de le déclarer dans providers !
  // useValue: unLogViteFait
  useFactory: factoryLogger
})
export class LoggerService implements ToLog {

  constructor() { }

  log(mess: string, ...params: any[]) {
    console.log(mess, params);
  }
}

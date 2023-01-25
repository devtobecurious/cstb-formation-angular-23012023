import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper',
  pure: true
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof(value) === 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName'
})
export class ChangeNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `___${value.charAt(0).toUpperCase()}${value.slice(1)}___`;
  }

}

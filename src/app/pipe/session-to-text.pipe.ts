import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sessionToText'
})
export class SessionToTextPipe implements PipeTransform {
  transform(session: boolean): string {
    if (session === undefined) {
      return '';
    }
    return session ? 'Open' : 'Closed';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progressConvert'
})
export class ProgressConvertPipe implements PipeTransform {

  transform(value: any): string {
    return value + '%';
  }

}

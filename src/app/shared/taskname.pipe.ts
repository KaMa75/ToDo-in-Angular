import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskname'
})
export class TasknamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}

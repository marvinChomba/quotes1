import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: any): any {
    let now:any = new Date();
    var diff = now.getTime() - value.getTime();
    diff = diff / 1000;
    diff = diff / 60;
    diff = diff / 60;
    diff = diff / 24;
    return Math.ceil(diff) - 1;
  }
}

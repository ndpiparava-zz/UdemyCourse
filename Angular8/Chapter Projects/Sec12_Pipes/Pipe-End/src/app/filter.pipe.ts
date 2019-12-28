import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // if you do this angular refilter realtime data(whenver any change data it try to refilter) and it raise the performance issue
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      
      if (item[propName] === filterString ) {
        resultArray.push(item);
      }
    }
     return resultArray;
  }
}

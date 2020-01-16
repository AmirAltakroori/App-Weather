import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findCitiesFilter'
})
export class FindCitiesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args)
    {
      return value;
    }
    return value.filter(item=>{
      return item.name.toLowerCase().match(args.toLowerCase());
    })
  }

}

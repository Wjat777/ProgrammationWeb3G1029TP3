import { Pipe, PipeTransform } from '@angular/core';
import { iForfait, iHotel } from 'src/app/model/InterfaceForfait';
@Pipe({
  name: 'destinationFilter',
  pure: false,
})
export class DestinationFilter implements PipeTransform {
  transform(items: iForfait[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.destination.indexOf(filter) !== -1);
  }
}

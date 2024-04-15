import { Pipe, PipeTransform } from '@angular/core';
import { maid } from './maid';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(maids:maid[],searchTerm:string): maid[] {
    return maids.filter((maid)=>maid.first_name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}

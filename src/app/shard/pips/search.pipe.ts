import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any) {
      if(!value) return null;
      if(!args || args ==='') return value;
      args=args.toLowerCase()

      return value.filter((data:any) =>{
        return JSON.stringify(Object.values(data)).toLowerCase().includes(args)
      })
  }

}

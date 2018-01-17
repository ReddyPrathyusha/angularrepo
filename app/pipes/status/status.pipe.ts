import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value >= 60){
      return "A Grade";
    } else if(value >= 40 && value < 60){
      return "B Grade";
    } else if(value < 40){
      return "C Grade";
    }  
  }

}

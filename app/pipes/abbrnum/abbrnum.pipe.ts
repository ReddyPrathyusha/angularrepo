import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrnum'
})
export class AbbrnumPipe implements PipeTransform {

  transform(number: number, args?: any): any {
    
    var dec = 2;
    var output : string;
    dec = Math.pow(10, dec);

    var abbrev = ["K", "M", "B", "T"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            var number = Math.round(number * dec / size) / dec;
            if((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            output = String(number);
            output += abbrev[i];
            break;
        } else {
          output = String(number);
        }
    }

    return output;


  }

}

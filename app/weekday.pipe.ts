import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'weekday'})
export class WeekdayPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if(value=="1"){
            return "Monday";
        }
        if(value=="2"){
            return "Tuesday";
        }
        if(value=="3") {
            return "Wednesday";
        }
        if(value=="4"){
            return "Thursday";
        }
        if(value=="5"){
            return "Friday";
        }
        if(value="6"){
            return "Saturday";
        }
        if(value="7"){
            return "Sunday";
        }
        else{
            return "others";
        }
    }
}

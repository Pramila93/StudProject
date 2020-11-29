import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"per"
})

export class MarksPipe implements PipeTransform{
    transform(marks:number){
        let per=marks.toString();
        if(per.length==4){
            return per+"0%";
        }
        else{
            return per+"%";
        }
        
    }
}
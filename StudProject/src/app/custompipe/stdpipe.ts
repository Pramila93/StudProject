import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"standard"
})

export class StdPipe implements PipeTransform{
    transform(std:number){
        let ar=std.toString();
        if(std==1){
            
            return ar+"st Std";
        }
        else if(std==2){
            
            return ar+"nd Std";
        }
        else if(std==3){
           
            return ar+"rd Std";
        }
        else {
            
            return ar+"th Std";
        }
    }
}